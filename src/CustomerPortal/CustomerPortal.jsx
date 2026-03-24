import React from 'react';
import { useNavigate } from 'react-router-dom';

export function CustomerPortal({ user, setUser, weather }) {
    const navigate = useNavigate();
    const [appointments, setAppointments] = React.useState([]);
    const [service, setService] = React.useState('');
    const [date, setDate] = React.useState('');


    React.useEffect(() => {
      fetch('/api/customer') 
        .then((response) => {
          if (!response.ok) {
            setUser(null);
            localStorage.removeItem('user');
            navigate('/SignIn');
          }
        });

        fetch('/api/appointments')
        .then((response) => response.json())
        .then((data) => setAppointments(data))
        .catch((error) => console.error('Error fetching appointments:', error));





    }, []);


  const handleSchedule = async () => {
    if (!service || !date) {
      alert('Please select a service and date.');
      return;
    }
    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service, date }),
    });
    if (response.ok) {
      const newAppointment = await response.json();
      setAppointments([...appointments, newAppointment]);
      alert('Appointment scheduled successfully!');
    }
  };



  const handleSignOut = async () => {
    await fetch('/api/auth/logout', {method: 'DELETE'});
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
      <h4 className="mt-5 mb-3">Schedule an Appointment</h4>
      <div className="mb-3">
        <select className="form-control mb-3" value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Select a service</option>
          <option value="residential">Residential Pest Control</option>
          <option value="commercial">Commercial Pest Control</option>
          <option value="termite">Termite Treatment</option>
          <option value="rodent">Rodent Control</option>
          <option value="ant">Ant Control</option>
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
      

      <button type="button" className="btn btn-danger mt-3 mb-3" onClick={handleSignOut}>Sign Out</button>
    </main>
  );
}