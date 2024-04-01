import React, { useState } from 'react'
import '../css and scss/login.css'
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';


function Signup() {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const hanldeSubmit = async (e) =>{
  e.preventDefault()
  
  const displayName = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const auth = getAuth();

  function getRandomColor() {
  const colors = ['#FF5733', '#3366FF', '#33FF33', '#9933FF', '#FF3333', '#FFFF33', '#FF33FF', '#33FFFF', '#66FF33', '#FF3366'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const assignRandomColor = async (userId) => {
  const randomColor = getRandomColor();
  const userColorRef = doc(db, "user_colors", userId);
  await setDoc(userColorRef, { color: randomColor });
};

await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    const userId = userCredential.user.uid;
    assignRandomColor(userId);
    console.log(user);
    navigate('/chat');         
  })
  .catch((err) =>{
    setErr(true);
    console.log(err);
  });

await updateProfile(auth.currentUser, {
    displayName: displayName,
});
}

  return (
    <div className="container">
        {err && <span style={{color:'red', position: 'absolute', top: '50px', fontWeight:'bold'}}>Возникла ошибка</span>}
        <div className='border-screen w-brscreen' >
            <div className="screen">
                <div className="screen__content">
                    <form onSubmit={hanldeSubmit} className="login">
                        <h1 style={{ textAlign:'center', margin: '0', fontSize:'32px', }}>Зарегистрироватся</h1>
                        <div className="login__field">
                            <input type="text" className="login__input" placeholder="Имя"></input>
                        </div>
                        <div className="login__field">
                            <input type="text" className="login__input" placeholder="Почта"></input>
                        </div>
                        <div className="login__field">
                            <input type="password" className="login__input" placeholder="Пароль"></input>
                        </div>
                        <button style={{margin:'0px 20%',}} className="button login__submit">
                            <span className="button__text">Зарегистрироватся</span>
                        </button>	
                        <div className='help-text'>Есть аккаунт?<Link to="/login">Войти</Link></div>		
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup