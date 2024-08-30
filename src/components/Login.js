import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Login.css'; // Import the CSS file

function Login() { // Changed login to Login (capitalized)
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle navigation to Profile page upon login
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Add your login logic here
    navigate('/profile'); // Navigate to the Profile page
  };

  // Function to handle navigation to Register page
  const goToRegister = () => {
    navigate('/register'); // Navigate to the Register page
  };

  return (
    <div className="profile-container">
      <h1 className="profile__title">Login</h1> {/* Changed title to Login */}
      <form className="profile__form" onSubmit={handleLogin}> {/* Added onSubmit */}
        <input type="email" className="profile__input" placeholder="Email Address" required />
        <input type="password" className="profile__input" placeholder="Password" required />
        <button type="submit" className="profile_button">Login</button> {/* Submit button for login */}
        <button 
          type="button" 
          className="profile__toggle-button" 
          onClick={goToRegister}
          style={{ backgroundColor: 'white', color: 'black' }}
        >
          Don't have an Account? Signup
        </button>
      </form>
    </div>
  );
}

export default Login;
