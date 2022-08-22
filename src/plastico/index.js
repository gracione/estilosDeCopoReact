import React, { useState,useEffect } from 'react';
import './styles.css';

export default function Logon() {
  const [user, setUser] = useState();

  return (
    <>
    {user?.quote}
    </>
  );
}