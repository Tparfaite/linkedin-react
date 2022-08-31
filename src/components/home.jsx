import React from 'react';
import styles from "./home.module.css";


const Home = () => {
  return (
    <div className={styles.home}> 
    <h2>LinkedIn Home page</h2>
      <p>LinkedIn is the world's largest professional network on the internet.<br/>
        You can use LinkedIn to find the right job or internship,<br/>
        connect and strengthen professional relationships, and learn <br/>
        the skills you need to succeed in your career
       </p>
       
    </div>
  )
}

export default Home
