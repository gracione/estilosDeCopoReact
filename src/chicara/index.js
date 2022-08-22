import React, { useState,useEffect } from 'react';
import api from '../services/api';

import './styles.css';

export default function Logon() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get()
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  return (
    <>
    {user?.quote}
    </>
  );
}