import "./ProfileIndex.css";
// import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import App from "./App.jsx";
import Experience from "./Experiance.jsx";
import Attach  from "./Attach.jsx";

import React, { Suspense } from "react";
import Profile from './ProfileApp'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(

   <>
   <Router>
    <Routes>
      <Route path="/" element={<Attach/>} />
      <Route path="/profile" element={<Profile/>} />
      
    </Routes>
   </Router>
   </>

  
    
  
 
);
