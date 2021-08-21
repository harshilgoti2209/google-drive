import React from "react";
import Title from "../components/Title";
import File from "../components/File";
import Folder from "../components/Folder";
import pdf from "../assets/File-pdf.svg";
import ppt from "../assets/File-ppt.svg";
import folder from "../assets/Folder.svg";
import text from "../assets/File-text.svg";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <Title path="My documents > Training > New hire onboarding" />
      <div className="body">
        <div className="head">
          <div className="control">
            <div className="heading">
              <h2>New Hire onboarding</h2>
              <p>3 folders, 4 files </p>
            </div>
            <div className="search">
            <TextField className="outlined-basic" label="Search" variant="outlined" />
            </div>
          </div>
          <div className="ff">
            <Button variant="contained" color="primary" style={{color:'white'}} className='btn'>
              New Folder
            </Button>
            <Button variant="contained" color="primary" className='btn'>
              New File
            </Button>
          </div>
        </div>
        <h4>3 folders</h4>
        <div className="container">
          <Folder name="Day1" logo={folder} />
          <Folder name="Day2" logo={folder} />
          <Folder name="Day3" logo={folder} />
        </div>
        <h4>4 files</h4>
        <div className="container">
          <File name="about toddle" logo={text} type="DOC" />
          <File name="To-do list" logo={ppt} type="PPT" />
          <File name="about toddle" logo={pdf} type="PDF" />
          <File name="about toddle" logo={pdf} type="PDF" />
        </div>
      </div>
    </div>
  );
}
