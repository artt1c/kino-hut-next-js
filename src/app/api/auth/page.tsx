'use client';

import React, {useEffect} from 'react';


const Auth = () => {

  // const [id, setId] = useState()

  useEffect(() => {
    fetch('/api/auth/guest')
      .then(res => res.json())
      // .then(res => setId(res.guest_session_id	))
  }, []);



  return (
    <div className='text-center text-3xl font-bold mt-[25vh]'>
      Auth
    </div>
  );
};

export default Auth;