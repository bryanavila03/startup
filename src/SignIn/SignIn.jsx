import React from 'react';

export function SignIn({ setUser,weather }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isRegistered, setIsRegistered] = React.useState(false);

  const handleSignIn = async () => {

    const endpoint = isRegistered ? '/api/auth/login' : '/api/auth/create';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: username, password: password }),
    });
    if (response.ok) {
      setUser(username);
      localStorage.setItem('user', username);
      window.location.href = '/CustomerPortal';
    } else {
      alert('Sign in failed. Please check your credentials and try again.');
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
        <button type="button" className="btn btn-success" onClick={handleSignIn}>
        {isRegistered ? 'Sign In' : ' Create Account'}
          </button>
        <button type="button" className="btn btn-outline-primary" onClick={() => setIsRegistered(!isRegistered)}>
          {isRegistered ? 'Create an account' : 'Already have an account? Sign In'}
        </button>
      </form>
    </main>
  );
}