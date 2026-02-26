import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import { Services } from './Services/Services';
import { AboutUs } from './AboutUs/AboutUs';
import { ContactUs } from './ContactUs/ContactUs';
import { SignIn } from './SignIn/SignIn';
import { CustomerPortal } from './CustomerPortal/CustomerPortal';



export default function App() {

    const [user, setUser] = React.useState(null);

     React.useEffect(() => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        setUser(savedUser);
      }
    }, []);

    const [weather, setWeather] = React.useState({
      temperature: null,
      condition: 'Unknown',
      outlook: 'Weather data is loading...' 
    });
    React.useEffect(() => {
      const interval = setInterval(() => {
        const newTemperature = Math.floor(Math.random() * 40) + 60;
        const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Windy'];
        const newCondition = conditions[Math.floor(Math.random() * conditions.length)];
        const newOutlook = `The weather is currently ${newCondition.toLowerCase()} with a temperature of ${newTemperature} degrees F.`;
        setWeather({
          temperature: newTemperature,
          condition: newCondition,
          outlook: newOutlook
        });
       },1000);


      return () => clearInterval(interval);
    }, []);

  return (
  <BrowserRouter>
  <div className="app bg-dark text-light">
    <header>
      <h1>Schedule an Appointment Today! (###) ###-####</h1>
      <nav className = "site-navbar">
         <ul>
          <li id="home-link"><NavLink to ="/">Phoenix Pest Control</NavLink></li>
          <li><NavLink to="/Services">Services</NavLink></li>
          <li><NavLink to="/AboutUs">About Us</NavLink></li>
          <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
          <li><NavLink to="/SignIn">Sign In</NavLink></li>      
        </ul>
      </nav>

    </header>

<Routes>
  <Route path='/' element={<Login weather={weather} />} exact />
  <Route path='/Services' element={<Services weather={weather} />} />
  <Route path='/AboutUs' element={<AboutUs weather={weather} />} />
  <Route path='/ContactUs' element={<ContactUs weather={weather} />} />
  <Route path='/SignIn' element={
    user
      ? <CustomerPortal user={user} setUser={setUser} weather={weather} />
      : <SignIn setUser={setUser} weather={weather}/> 
  } />
   


  <Route path='/CustomerPortal' element={
    user
      ? <CustomerPortal user={user} setUser={setUser} weather={weather} />
      : <SignIn setUser={setUser} weather={weather}/> 
  } />
  <Route path='*' element={<NotFound />} />

</Routes>

    <footer>
      <hr />
      <span className="text-reset">Bryan Avila</span>
      <br />
       <a href="https://github.com/bryanavila03/startup.git">GitHub</a>
    </footer>
    </div>
  </BrowserRouter>
  );
}
function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}
