import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const FirebaseUsersCounter = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
      if (user) {
        // User is signed in.
        setUserCount((prevCount) => prevCount + 1);
      } else {
        // No user is signed in.
        setUserCount((prevCount) => prevCount > 0 ? prevCount - 1 : 0);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <p>{userCount}</p>
    ) ;
};

export default FirebaseUsersCounter;
