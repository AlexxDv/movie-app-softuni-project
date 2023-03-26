import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from './context/GlobalState';

export const  Login =() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useContext(GlobalContext);
  const { setIsLoggedIn } = useContext(GlobalContext);
  const navigate  = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.accessToken;
        setToken(token);
        setIsLoggedIn(true)
        localStorage.setItem('token', token);
        navigate('/')
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
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

