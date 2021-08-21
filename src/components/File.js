import React from "react";
import "./File.css";
export default function File(props) {
  return (
    <div className="file">
      <div className="file-photo">
        <img src={props.logo} alt="File" />
      </div>
      <div className="file-metadata">
        <div className="file-info">
          <h4>{props.type}</h4>
          <p>{props.name}</p>
        </div>
        <h2>...</h2>
      </div>
    </div>
  );
}
