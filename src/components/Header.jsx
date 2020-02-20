
import React from 'react';


function Header() {
  const styles = {
      backgroundColor: 'Blue',
      fontFamily: 'Roboto',
      color: 'white',
      textAlign: 'center',
      margin: '0',
      height: '8vh',
      fontSize: '6vh',
      lineHeight: '8vh',
  };
  return (
    <div>
      <h1 style={styles}>Tama2</h1>
    </div>
  );
}

export default Header;
