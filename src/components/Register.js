import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Import the Supabase client
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (!isStrongPassword(password)) {
      setError('Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message);
    }
  };

  const isStrongPassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return strongPasswordRegex.test(password);
  };

  return (
    <div className="register-container">
      <h1 className="register__title">Register</h1>
      <form className="register__form" onSubmit={handleRegister}>
        <input type="text" className="register__input" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" className="register__input" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" className="register__input" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="register__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" className="register__input" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        {error && <div className="register__alert">{error}</div>}
        <button type="submit" className="register__button">Signup</button>
      </form>
    </div>
  );
}

export default Register;