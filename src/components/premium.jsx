import React from 'react';
import styles from '/prem.module.css';

const Premium = () => {
  return (
    <div className={styles.premium}>
      <h2>Welcome to LinkedIn Premium</h2>
      <p> After your promotional period, you will automatically be charged for a subscription<br/>
       on a monthly or annual basis (at your choice) unless you <br/>
       cancel. Learn more. InMail credits expire after 90 days. For Who's Viewed<br/>
        Your Profile, first and last names may not be listed for profile <br/>
        viewers who have chosen to remain semi- or fully anonymous via <br/>
        their privacy settings. Certain search and browsing restrictions <br/>
        apply if an unusually high number of queries are executed in a short<br/>
       time period, in order to prevent system abuse.</p>
    </div>
  )
}

export default Premium
