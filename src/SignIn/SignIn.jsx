import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SignIn({ setUser,weather }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSignIn = async (endpoint) => {

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: username, password: password }),
    });
    if (response.ok) {
      setUser(username);
      localStorage.setItem('user', username);
      navigate('/CustomerPortal');    
    } else {
      const data = await response.json();
      alert(data.message || 'An error occurred');
    }
  };
    
    
  return (
    <main className="container">
    <p className="mt-5 mb-5">{weather.outlook}</p>  

      <img src = "ant.jpg" alt = "Pest Control Image" className = "main-image"/>

      <h2 className="mt-5 mb-5">Sign In</h2>

      <form className="sign-in-form">
        <div>
          <label className="form-label">Username</label>
          <input type="text" id="username" className="form-control" placeholder="Enter your username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-check ">
        <input className="form-check-input" type="checkbox" id="remember-me" />
        <label className="form-check-label" htmlFor="remember-me">Remember Me</label>
        </div>
        <br />
        <button type="button" className="btn btn-success" onClick={() => handleSignIn('/api/auth/login')}>
        Sign in         
         </button>
        <button type="button" className="btn btn-primary" onClick={() => handleSignIn('/api/auth/create')}>
        Create Account
        </button>
      </form>
    </main>
  );
}