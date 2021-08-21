import React from "react";
import "./File.css";
export default function Folder(props) {
  return (
    <div className="file">
      <div className="file-photo" style={{backgroundColor:'#f0f0e9' }}>
        <img src={props.logo} alt="File" />
      </div>
      <div className="file-metadata">
        <div className="file-info">
          <h4>{props.name}</h4>
        </div>
        <h2>···</h2>
      </div>
    </div>
  );
}
