import React from 'react';
import styles from "./message.module.css";

const Messaging = () => {
  return (
    <div className={styles.message}> 
      <h2>  Can I send anyone a message on LinkedIn?</h2>
      <p>
     
On LinkedIn, you can only message your 1st-degree connections
 (and, within <br/>group pages, fellow group members) for free.<br/>
  If you aren't connected, you always have <br/>
the option to send an InMail to another LinkedIn member
      </p>
    </div>
  )
}

export default Messaging
