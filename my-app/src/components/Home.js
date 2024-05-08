import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Dummy admin data (replace with actual admin data)
  const adminData = {
    name: 'Admin Name',
    picture: 'admin-picture-url',
    contact: 'Admin Contact',
    address: 'Admin Address',
  };

  // Function to handle sending notification (dummy function for now)
  function sendNotification() {
    // Dummy function body for sending notification
    console.log('Notification sent');
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#2980b9', color: '#fff', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Society Connect <br></br> Admin Dashboard</h1>

      {/* Admin Profile */}
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px', width: '80%' }}>
        <h2>Admin Profile</h2>
        <div>
          <img src={adminData.picture} alt="Admin" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
          <div><strong>Name:</strong> {adminData.name}</div>
          <div><strong>Contact:</strong> {adminData.contact}</div>
          <div><strong>Address:</strong> {adminData.address}</div>
        </div>
      </div>

      {/* Generate Notification */}
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px', width: '80%' }}>
        <h2>Generate Notification</h2>
        <textarea
          placeholder="Enter notification message..."
          style={{ width: '100%', minHeight: '100px', marginBottom: '10px', padding: '5px' }}
        />
        <button onClick={sendNotification} style={{ padding: '8px 16px', cursor: 'pointer' }}>Send Notification</button>
      </div>

      <br />
      <Link to="/" style={{ color: '#fff' }}>Logout</Link>
    </div>
  );
}

export default Home;
