'use client';

import React, {useEffect} from 'react';


const Auth = () => {

  useEffect(() => {
    fetch('/auth/guest');
  }, []);



  return (
    <div>
      Auth
    </div>
  );
};

export default Auth;