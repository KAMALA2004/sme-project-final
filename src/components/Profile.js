// src/components/Profile.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 
import './Profile.css';
const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created successfully');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Logged in successfully');
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="profile">
      <h2 className="profile__title">{isSignup ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleAuth} className="profile__form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="profile__input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="profile__input"
        />
        <button type="submit" className="profile__button">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <button onClick={() => setIsSignup(!isSignup)} className="profile__toggle-button">
        {isSignup ? 'Already have an account? Login' : 'New user? Sign Up'}
      </button>
    </div>
  );
};

export default Profile;
