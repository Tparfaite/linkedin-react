import React from 'react';
import styles from "./notify.module.css";

const Notifications = () => {
  return (
    <div className={styles.notify}>
      <h2>LinkedIn notification</h2>
      <p>You can access your notifications by clicking the<br/>
       Notifications icon at the top of the LinkedIn homepage.<br/>
        Notifications appear at the top of your LinkedIn homepage<br/>
        from the My Network, Jobs, Messaging, or Notifications tabs
      </p>
    </div>
  )
}

export default Notifications
