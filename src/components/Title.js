import React from "react";
import back from "../assets/Back.svg";
import "./Title.css";
export default function Title(props) {
  return (
    <div className="title">
      <ul>
        <li>
          <img src={back} alt="back"></img>
        </li>
        <li>
          <img 
            src="https://play-lh.googleusercontent.com/UykDaGaVOdGBzakcbormqFYqMpKATA5Ed_3ia-t3riDy4IbMIfDbrW7OIaEeE6iB9Z0"
            className="logo"
            alt="back"
          ></img>
        </li>
        <li>
          <h3>{props.path}</h3>
        </li>
      </ul>
    </div>
  );
}
