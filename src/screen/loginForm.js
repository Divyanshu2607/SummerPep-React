import React, { useState } from 'react';
import './loginForm.css'; 

function LoginForm() {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Registration No:', regNo);
    console.log('Password:', password);
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label text="regNo">Registration No:</label>
          <input
            type="text"
            id="regNo"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label text="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;