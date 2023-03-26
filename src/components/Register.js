import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !repeatPassword) {
      setErrorMessage('All fields are required');
      return;
    }

    if (password !== repeatPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    console.log(`Email: ${email}, Password: ${password}`);
    // Here you can add the logic to submit the registration form to your server or API
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
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

        <label htmlFor="repeat-password">Repeat Password:</label>
        <input
          type="password"
          id="repeat-password"
          value={repeatPassword}
          onChange={(event) => setRepeatPassword(event.target.value)}
          required
        />

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <button type="submit">Register</button>
        <p>
          Already registered? <Link to="/login">Login here</Link>.
        </p>
      </form>
    </div>
  );
}
