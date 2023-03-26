import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const  Login =() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Here you can add the logic to submit the login form to your server or API
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Sign In</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button type="submit">Login</button>
        <p>
        New to Movie App? <Link to="/register"> Sign up now</Link>.
        </p>
      </form>
    </div>
  );
}

