import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import style from './Header.css'

function LogIn() {
  const {isAuthenticated,loginWithRedirect,} = useAuth0();

  return !isAuthenticated && (
    <button onClick={loginWithRedirect} style={style} className="loginBtn">Log in</button>
  );
}

export default LogIn;