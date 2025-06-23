import React from 'react';
import '../styles/Profile.scss';


const ProfileSummary = () => {
  return (
    <div className="profile-summary">
      <img src='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d' alt="profile" />
      <h2>You</h2>
      <div className="stats">
        <span><strong>76,687</strong> posts</span>
        <span><strong>2.1M</strong> followers</span>
        <span><strong>4</strong> following</span>
      </div>
      <p className="category">Personal Account</p>
      <p className="description">" The only way to do great work is to love what yo do "
        <br />- Steve Jobs </p>
    </div>
  );
};

export default ProfileSummary;
