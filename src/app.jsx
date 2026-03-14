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
      fetch('https://api.open-meteo.com/v1/forecast?latitude=40.2338&longitude=-111.6585&current_weather=true&temperature_unit=fahrenheit')
        .then(response => response.json())
        .then(data => {
          const temp = data.current_weather.temperature;
          const code = data.current_weather.weathercode;
          const getCondition = (code) => {
            if (code === 0) return 'Sunny';
            if (code >= 1 && code <= 3) return 'Partly Cloudy';
            if (code >= 45 && code <= 48) return 'Foggy';
            if (code >= 51 && code <= 57) return 'Drizzle';
            if (code >= 61 && code <= 67) return 'Rainy';
            if (code >= 71 && code <= 77) return 'Snowy';
            if (code >= 80 && code <= 82) return 'Rain Showers';
            if (code >= 95 && code <= 99) return 'Thunderstorms';
            return 'Unknown';
          };
          const condition = getCondition(code);
          setWeather({
            temperature: temp,
            condition: condition,
            outlook: `Current weather in Provo: ${condition}, ${temp}°F`
          });
        });
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
            {!user && (
                <li>
                  <NavLink to="/SignIn">Sign In</NavLink>
                </li>
              )}

              {user && (
                <li>
                  <NavLink to="/CustomerPortal">Customer Portal</NavLink>
                </li>
              )}        
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
