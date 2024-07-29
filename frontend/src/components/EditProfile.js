import React from 'react';
import '../Assets/css/EditProfile.css';
import profilepic from '../Assets/Images/women1.jpg';

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <div className="profile-pic-section">
        <div className="profile-pic-container">
          <img src={profilepic} alt="Profile" className="profile-pic" />
          <button className="upload-btn">Change Picture</button>
        </div>
      </div>
      <div className="form-section">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />

        <label htmlFor="bio">Bio</label>
        <textarea id="bio" name="bio" placeholder="Tell us about yourself"></textarea>

        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  );
};

export default EditProfile;
