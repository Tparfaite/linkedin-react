import React from 'react';
import styles from "./nav.module.css";
import {Link} from "react-router-dom";

// import {RiLinkedinBoxFill} from "react-icons/ri";
// import {AiOutlineSearch} from "react-icons/ai";
// import {AiFillHome} from "react-icons/ai";
// import {RiNurseFill} from "react-icons/ri";
// import {RiSuitcase3Line} from "react-icons/ri";
// import {RiMessage2Line} from "react-icons/ri";
// import {RiNotification4Line} from "react-icons/ri";



const Nav = () => {
  return (< div className={styles.links}>
  
<Link to='/'>logo</Link>
<input type="text" placeholder="search"/>
<Link to="/home">Home</Link>
<Link to='/mynet'>My Network</Link>
<Link to='/jobs'>Jobs</Link>
<Link to='/messaging'>Messaging</Link>
<Link to='/notifications'>Notifications</Link>
<Link to='/me'>Me</Link>
<Link to='/work'>Work</Link>
<Link to='/premium'>Try our free premium</Link>
    </div>
  )
}

export default Nav
