import React from 'react'
import '../ProfileApp.css'
import {BsGithub} from 'react-icons/bs'
import { BsInstagram } from "react-icons/bs";
import {BsTwitter} from 'react-icons/bs'

 const Profile = () => {
  return (
    <div className="profile">
      <div className="image">
        <img
          src="https://i.pinimg.com/564x/fa/57/45/fa574536f79c5f2f956c11e11a575c2a.jpg"
          alt="MY sexy pfp"
          width={"170rem"}
        />
      </div>
      <div className="socials">
        <BsGithub className="icons" />
        <BsInstagram className="icons" />
        <BsTwitter className="icons" />
      </div>
    </div>
  );
}

export default Profile