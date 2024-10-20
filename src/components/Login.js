import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../firebaseConfig';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
        // You may want to update the user profile with the name here
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/home');
    } catch (error) {
      console.error('Authentication error:', error);
      alert(error.message);
    }
  };

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">{isSignup ? 'Sign Up' : 'Login'}</h1>
      <form className="login-form" onSubmit={handleAuth}>
        {isSignup && (
          <input
            type="text"
            className="login-input"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          className="login-input"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isSignup && (
          <input
            type="password"
            className="login-input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button type="submit" className="login-button">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
        <button
          type="button"
          className="login-toggle-button"
          onClick={toggleSignup}
        >
          {isSignup ? 'Already have an Account? Login' : "Don't have an Account? Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Login;
