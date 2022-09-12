import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import style from './Header.css'

function LogOut() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button style={style} className="loginBtn" onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</button>
  );
}

export default LogOut;