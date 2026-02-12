import React from 'react';

export function SignIn() {
  return (
    <main className="container">
    <p className="mt-5 mb-5">"Current Weather: 89 degrees F"</p> 

      <img src = "ant.jpg" alt = "Pest Control Image" className = "main-image"/>

      <h2 className="mt-5 mb-5">Sign In</h2>

      <form method="get" action="play.html">
        <div>
          <label className="form-label">Username</label>
          <input type="text" id="username" className="form-control" placeholder="Enter your username" />
        </div>
        <div>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" placeholder="Enter your password" />
        </div>
        <div className="form-check ">
        <input className="form-check-input" type="checkbox" id="remember-me" />
        <label className="form-check-label" htmlFor="remember-me">Remember Me</label>
        </div>
        <br />
        <button type="button" className="btn btn-success" onClick={() => window.location.href='/CustomerPortal'}>Sign In</button> 
    </form>
    </main>
  );
}