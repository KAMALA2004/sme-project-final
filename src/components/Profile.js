import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; // Import the Supabase client
import './Profile.css';

function Profile() {
  const [user, setUser] = useState({
    profilePic: 'https://via.placeholder.com/150', // Replace with actual profile picture URL
    name: '',
    email: '',
    phone: '+1 234 567 8900' // Default phone number (optional)
  });

  // Fetch the user data from Supabase
  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();

      if (error) {
        console.error('Error fetching user:', error);
      } else if (user) {
        setUser({
          ...user,
          name: `${user.user_metadata.firstName || ''} ${user.user_metadata.lastName || ''}`,
          email: user.email,
          phone: '+1 234 567 8900' // Default value, update as needed
        });
      }
    };

    fetchUserData();
  }, []);

  const handleEditProfile = () => {
    alert('Edit Profile functionality not implemented.');
  };

  const handleChangePassword = () => {
    alert('Change Password functionality not implemented.');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-pic-container">
          <img src={user.profilePic} alt="Profile" className="profile-pic" />
          <button className="edit-pic-button">Edit</button>
        </div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <button onClick={handleEditProfile} className="edit-profile-button">Edit Profile</button>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-section">
          <h2>Account Management</h2>
          <button onClick={handleChangePassword} className="change-password-button">Change Password</button>
        </div>
        <div className="profile-section">
          <h2>Accessible Loans</h2>
          <div className="loan-list">
            <div className="loan-item">
              <p><strong>Loan Type:</strong> Working Capital Loan</p>
              <p><strong>Amount:</strong> $50,000</p>
              <p><strong>Status:</strong> Approved</p>
              <button>View Details</button>
            </div>
            <div className="loan-item">
              <p><strong>Loan Type:</strong> Equipment Financing</p>
              <p><strong>Amount:</strong> $100,000</p>
              <p><strong>Status:</strong> Under Review</p>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <div className="profile-section">
          <h2>Investor Contacts</h2>
          <div className="contact-list">
            <div className="contact-item">
              <p><strong>Investor Name:</strong> Jane Smith</p>
              <p><strong>Company:</strong> XYZ Ventures</p>
              <p><strong>Contact:</strong> jane.smith@xyz.com</p>
              <button>View Profile</button>
            </div>
            <div className="contact-item">
              <p><strong>Investor Name:</strong> Michael Brown</p>
              <p><strong>Company:</strong> ABC Investments</p>
              <p><strong>Contact:</strong> michael.brown@abc.com</p>
              <button>View Profile</button>
            </div>
          </div>
          <button className="add-contact-button">Add New Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
