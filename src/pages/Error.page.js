import React from 'react';
import error from '../img/—Pngtree—ui default page page 404_3801714.png';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif', 
     
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: 'rgb(67 161 185)',
    textAlign: 'center',
    margin: '0',
  },
  message: {
    fontSize: '1rem',
    textAlign: 'center',
    color: '#fff',
  },
  img: {
    width: '300px',
    margin: '0 auto',
    textAlign: 'center',
    display: 'block',
  },
};

function ErrorPage() {

  return (
    <div className="container">
        <div className='border-screen'>
            <div className="screen">
              <div style={styles.container}>
                <h1 style={styles.heading}>Страница не найдена</h1>
                <h1 style={styles.heading}>404 </h1>
              <img style={styles.img} alt='error' src={error}></img>
                <p style={styles.message}>Упс! Похоже, вы наткнулись на несуществующую страницу.</p>
              </div> 
            </div>
        </div>  
    </div>

  );
}

export default ErrorPage;
