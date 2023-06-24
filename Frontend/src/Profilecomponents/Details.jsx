import React from "react";
import "./Project.css";
// import "../Header.css"
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import {BsHeart} from 'react-icons/bs'

const Details = () => {
  return (
    <div className="DetailsContainer">
      <div className="name">GabeMaru</div>
      <div className="stars">
        <AiOutlineStar className="star" />
        <AiOutlineStar className="star" />
        <AiOutlineStar className="star" />
        <AiOutlineStar className="star" />
        <AiOutlineStar className="star" />
      </div>
      <div className="likesDiv" >  < BsHeart className="icons_heart"  /> <p className="LikeCount" >2.3K</p> </div>
    </div>
  );
};

export default Details;
