import React from 'react';

const Navigation = ({ isSignedIn, onRouteChange, route }) => {
  console.log('Navigation');
  if (route === 'home') {
    if (isSignedIn) {
      return (
          <nav className='center'>
            <p
              className='f5 link dim black underline pointer'
              onClick={() => {onRouteChange('home', true);}}>Sign Out</p>
          </nav>
      );
    } else {
      return (
          <nav className='center'>
            <p
              className='f5 link dim black underline pointer'
              onClick={() => {onRouteChange('signIn', false);}}>Sign In</p>
          </nav>
      );
    }
  } else {
    return (
      <nav className='center'>
        <p
          className='f5 link dim black underline pointer'
          onClick={() => {onRouteChange('home', false);}}>Home</p>
      </nav>
    );
  }
}

export default Navigation;