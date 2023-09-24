import React from "react";
import "./App.scss";
import Icon from "./assets/unofficials.png";
import viteLogo from "/vite.svg";

function App() {
  const discord = "https://discord.gg/y3pdKB672x";
  return (
    <body>
      <div className="topnav">
        <img className="image" src={Icon}></img>
        <div className="active">
          <h1>Home</h1>
        </div>
      </div>
      <div className="sub-content">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <center>
          <img className="vite" src={viteLogo}></img>{" "}
        </center>
        <center>
          <h1>Welcome to unofficials</h1>
          <i>"We create roblox games."</i>
        </center>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div className="buttons">
          <a href="https://discord.gg/y3pdKB672x">
            <center>
              <button className="button1">Join our discord!</button>
            </center>
          </a>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </div>
    </body>
  );
}

export default App;
