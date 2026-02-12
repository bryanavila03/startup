import React from 'react';

export function CustomerPortal() {
  return (
    <main class="container">
    <p class="mt-5 mb-5">"Current Weather: 89 degrees F"</p> 

      <img src = "ant.jpg" alt = "Pest Control Image" class = "main-image"></img>

      <h2 class="mt-5 mb-5">Customer Portal</h2>
      <p>Welcome to your customer portal. Here you can manage your appointments, view service history, and update your personal information.</p>
      <p>Current Personal Information</p>

      <ul>
        <li>Name: John Doe</li>
        <li>Email: john.doe@example.com</li>
        <li>Phone: (###) ###-####</li>
        <li>Address: 1234 Elm Street, Phoenix, AZ 85001</li>
        
        </ul>
        <p>Service History</p>
        <ul>
        <li>Service 1: Residential Pest Control on MM/DD/YYYY - Status: Completed</li>
        <li>Service 2: Termite Treatment on MM/DD/YYYY - Status: Completed</li>
        <li>Service 3: Rodent Control on MM/DD/YYYY - Status: Scheduled</li>
        </ul>
        <p>Current Updates</p>
        <ul>
        <li>Update 1: Your last service was completed on MM/DD/YYYY. Please rate your experience.</li> 
        <li>Update 2: New promotions are available! Check out our latest deals on pest control services.</li>
        </ul>
    </main>
  );
}