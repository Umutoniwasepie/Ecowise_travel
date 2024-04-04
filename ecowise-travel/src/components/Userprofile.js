import React, { useState, useEffect } from 'react';
import ./userprofile.css

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from backend API
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Adjust based on your token storage
          },
        });
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Loading user profile...</p>;
  }

  return (
    <div className="user-profile">
      <h2>Welcome, {userData.username}</h2>
      <p>Email: {userData.email}</p>
      {/* Display other user data if available (e.g., preferences) */}
    </div>
  );
};

export default UserProfile;
