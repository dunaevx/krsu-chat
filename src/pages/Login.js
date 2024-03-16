import React, {useState} from 'react'
import '../css and scss/login.css'
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
        await signInWithEmailAndPassword(auth, email, password);
            navigate("/chat")
        } catch (err) {
            setErr(true);
        } 
    };

  return (
    <div className="container">
        {err && <span style={{color:'red', position: 'absolute', top: '50px', fontWeight:'bold'}}>Возникла ошибка</span>}
        <div className='border-screen'>
            <div className="screen">
                <div className="screen__content">
                    <form onSubmit={handleSubmit} className="login">
                        <h1 style={{ textAlign:'center', margin:'0px',}}>Войти</h1>
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" placeholder="Почта"></input>
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Пароль"></input>
                        </div>
                        <button className="button login__submit btn-login">
                            <span className="button__text">Войти</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>	
                        <div className='help-text'>Нет аккаунта?<Link to="/signup">Зарегистрироватся</Link></div>		
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login