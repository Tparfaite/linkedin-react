import React from 'react';
import styles from "./nav.module.css";
import {Link} from "react-router-dom";
import {FaLinkedinIn} from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";
import {BsFillPeopleFill} from "react-icons/bs";
import {BsBellFill} from "react-icons/bs";
import {BsChatDotsFill} from "react-icons/bs";
import {BsBriefcaseFill} from "react-icons/bs";
import {FaTh} from "react-icons/fa";


const Nav = () => {
  return (< div className={styles.links}>
  
<Link to='/'> <FaLinkedinIn/></Link>
<input type="text" placeholder="search"/>
<Link to="/home"><AiFillHome/> <br/>Home</Link>
<Link to='/mynet'><BsFillPeopleFill/> <br/>My Network</Link>
<Link to='/jobs'><BsBriefcaseFill/><br/>Jobs</Link>
<Link to='/messaging'><BsChatDotsFill/><br/>Messaging</Link>
<Link to='/notifications'><BsBellFill/> <br/>Notifications</Link>
<Link to='/me'>Me</Link>
<Link to='/work'><FaTh/><br/>Work</Link>
<Link to='/premium'>Try our free premium</Link>
    </div>
  )
}

export default Nav
