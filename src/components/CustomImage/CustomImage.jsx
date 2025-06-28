import React from 'react';
import WelcomeImage from '../../assets/Image/MyImage1.png'; // adjust path as needed

const WelcomeImageComponent = () => {
  return (
    <img
      src={WelcomeImage}
      alt="Welcome"
      style={{ width: '100%', maxWidth: '500px', marginTop: '20px' }}
    />
  );
};

export default WelcomeImageComponent;