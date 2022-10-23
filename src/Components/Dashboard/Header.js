import React from 'react';

 

const Header = ({ setIsAdding}) => {
  return (
    <header>
      <h1>USER MANAGEMENT </h1>
      <div style={{ marginTop: '30px', marginBottom: '18px'  }}>
        <button onClick={() => setIsAdding(true)}>ADD USER+</button>
 
      </div>
    </header>
  );
};

export default Header;
