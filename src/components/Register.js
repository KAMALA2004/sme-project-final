import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import Register-specific CSS

function Register() {
  const navigate = useNavigate();

  // State for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle registration form submission
  const handleRegister = (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    // Validate password strength
    if (!isStrongPassword(password)) {
      setError('Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Registration logic would go here

    // After successful registration, navigate to Login page
    navigate('/');
  };

  // Function to check password strength
  const isStrongPassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return strongPasswordRegex.test(password);
  };

  return (
    <div className="register-container">
      <h1 className="register__title">Register</h1>
      <form className="register__form" onSubmit={handleRegister}>
        <input 
          type="text" 
          className="register__input" 
          placeholder="First Name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          className="register__input" 
          placeholder="Last Name" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          className="register__input" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          className="register__input" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          className="register__input" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
        {/* Display error message if any */}
        {error && <div className="register__alert">{error}</div>}
        <button type="submit" className="register__button">Signup</button>
      </form>
    </div>
  );
}

export default Register;
