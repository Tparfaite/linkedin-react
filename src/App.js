import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

import Nav from "./components/nav";
import Logo from "./components/logo";
import Search from "./components/search";
import Home from "./components/home";
import Mynet from "./components/mynet";
import Me from "./components/me";
import Work from "./components/work";
import Jobs from "./components/jobs";
import Messaging from "./components/messaging";
import Notifications from "./components/notifications";
import Premium from "./components/premium";


function App() {
  return (
    <Router>
    <div className="App">
   
     <Nav/>

     <Routes>
        <Route path="/" element={<Logo/>}/> 
        <Route path="/search" element={<Search/>}/>
        <Route path="/home"  element={<Home/>}/> 
        <Route path="/mynet" element={<Mynet/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/messaging" element={<Messaging/>}/>
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="/me" element={ <Me/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/premium" element={<Premium/>}/>
        
      </Routes>
   
    </div>
    </Router>
  );
 
}

export default App;
