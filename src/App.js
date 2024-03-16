import React, { useEffect, useState } from 'react';
import './css and scss/App.css';
import './css and scss/loader.css';
import Background from './Background';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import Welcom from './pages/Welcom'
import ErrorPage from './pages/Error.page';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
// import { ProtectedRoute } from './context/protectedRoute';

function App(){

  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) =>{
      if(user){
        setUser(user);
        setFetching(false);
      } else {
        setFetching(false);
        setUser(null);
      }
    })
    return () => unsub();
  },[])

  if(fetching){
    return(
      <div style={{width:'100%', height:'100vh',}}>
        <Background/>
        <span className="loader"></span>
      </div>
    )
  }

  return (
    <div>
      <Background/> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcom/>} />
          <Route path='welcom' element={<Welcom/>} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route
            path='/chat'
            element={
              user ? <Chat /> : <Navigate to='/welcom' />
            }
          />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  ); 
  
}

export default App;
