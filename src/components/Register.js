import React, { useContext, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { GlobalContext } from './context/GlobalState';


export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { setIsLoggedIn } = useContext(GlobalContext);


  
  const navigate  = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password || !repeatPassword) {
      setErrorMessage('All fields are required');
      return;
    }

    if (password !== repeatPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    const response = await fetch('http://localhost:3030/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    if (!response.ok) {
      const error = await response.json();
      alert(error.message);
      return;
    }
   

    const data = await response.json();
    const token = data.accessToken;

    // Save the authorization token to local storage
    localStorage.setItem('token', token);
    if (token) {
      setIsRegistered(true);
      setIsLoggedIn(true)
      navigate('/')
    }

  };
  return (
    <>
      {isRegistered ?
        (
          <p>Successfully registered!</p>
        ) : (
          <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
              <h2>Sign Up</h2>
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
        )
      }
    </>
  );
}
