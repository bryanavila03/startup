import React from 'react';
import { useNavigate } from 'react-router-dom';

export function CustomerPortal({ user, setUser, weather }) {
    const navigate = useNavigate();
    const [appointments, setAppointments] = React.useState([]);
    const [service, setService] = React.useState('');
    const [date, setDate] = React.useState('');
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [messages, setMessages] = React.useState([]);


    React.useEffect(() => {
      fetch('/api/customer', { credentials: 'include' })
        .then((response) => {
          if (!response.ok) {
            setUser(null);
            localStorage.removeItem('user');
            navigate('/SignIn');
          }
        });

        fetch('/api/appointments', { credentials: 'include' })
        .then((response) => response.json())
        .then((data) => setAppointments(data || []))
        .catch((error) => console.error('Error fetching appointments:', error));

        fetch('/api/contact', { credentials: 'include' })
          .then((response) => response.json())
          .then((data) => {
            setName(data.name || '');
            setPhone(data.phone || '');
            setAddress(data.address || '');
          })
          .catch((error) => console.error('Error fetching contact information:', error));

    }, []);

    React.useEffect(() => {

      const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
      const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

      socket.onmessage = async (event) => {
        const text = event.data instanceof Blob ? await event.data.text() : event.data;
        const message = JSON.parse(text);
        setMessages((prev) => [...prev, message.message]);
      };
      return () => socket.close();
    }, []);
      


  const handleSchedule = async () => {
    if (!service || !date) {
      alert('Please select a service and date.');
      return;
    }
    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ service, date }),
    });

    if (response.ok) {
      const newAppointment = await response.json();
      setAppointments([...appointments, newAppointment]);

      const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
      const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        socket.onopen = () => {
          socket.send(JSON.stringify({
            message: `${user} scheduled a ${service} appointment!`
          }));
        };
      alert('Appointment scheduled successfully!');
    }
  };

  const handleSaveContact = async () => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ name, phone, address }),
    });
    if (response.ok) {
      alert('Contact information saved successfully!');
    }
  };


  const handleSignOut = async () => {
    await fetch('/api/auth/logout', {method: 'DELETE', credentials: 'include'});
    setUser(null);
    localStorage.removeItem('user');
    navigate('/SignIn');
    };

  return (


    <main className="container">
      <h1 className="mt-5 mb-5">Welcome, {user}!</h1>
    <p className="mt-5 mb-5">{weather.outlook}</p>  

      <img src = "ant.jpg" alt = "Pest Control Image" className = "main-image"/>

      <h2 className="mt-5 mb-5">Customer Portal</h2>
      <p>Welcome to your customer portal. Here you can manage your appointments, view service history, and update your personal information.</p>
      <h4 className="mt-5 mb-3">Live Updates</h4>
      <ul className="list-group mb-5">
        {messages.map((message, index) => (
          <li key={index} className="list-group-item">{message}</li>
        ))}
      </ul>
      
      
      <h4 className="mt-5 mb-3">Schedule an Appointment</h4>
      <div className="mb-3">
        <select className="form-control mb-3" value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Select a service</option>
          <option value="Residential Service">Residential Pest Control</option>
          <option value="Commercial Service">Commercial Pest Control</option>
          <option value="Termite Treatment">Termite Treatment</option>
          <option value="Rodent Control">Rodent Control</option>
          <option value="Ant Control">Ant Control</option>
        </select>
        <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
        <button type="button" className="btn btn-primary mt-3" onClick={handleSchedule}>Schedule Appointment</button>
      </div>

      <h5 className="mt-5 mb-3">Your Appointments</h5>
      <ul className="list-group mb-5">
        {appointments.length === 0 ? (
          <li className="list-group-item">No appointments scheduled.</li>
        ) : (
          appointments.map((appointment) => (
            <li key={appointment.id} className="list-group-item">
              {appointment.service} on {new Date(appointment.date).toLocaleDateString()}
            </li>
          ))
        )}
      </ul>
      <h4 className="mt-5 mb-3">Contact Information</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control mb-3" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input type="tel" className="form-control mb-3" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <input type="text" className="form-control mb-3" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <button type="button" className="btn btn-primary mt-3 mb-3" onClick={handleSaveContact}>Save Contact Information</button>

      <button type="button" className="btn btn-danger mt-3 mb-3" onClick={handleSignOut}>Sign Out</button>
    </main>
  );
}