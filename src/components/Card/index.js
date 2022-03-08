import React from "react";
import './cardStyle.css'
import { useState } from "react";
import avatar from '../../assets/card_assets/avatar.jpg'
import { Link } from "react-router-dom";
const Card = (props) =>{

    // setting default name for some character whose name is not available

    let defaultNameElement = <h3 className="topText">Name : {props.cardData.name}</h3>
    const nameElement = <h3 className="topText">Name : Unknown</h3>
    if(props.cardData.name === ""){
        defaultNameElement = nameElement
    }else{

    }

    return (
        <div className="card">
            <Link to="/details">
                <img  className="avatarImg" alt="user avatar"src={avatar}/>
            </Link>
            <div className="topTextContainer" >
                {/* <h3 className="topText">Name :{props.cardData.name} </h3> */}
                {defaultNameElement}
                <h3 className="topText">Known as : {props.cardData.aliases[0]} </h3>
            </div>
           
        </div>
    )
}

export default Card