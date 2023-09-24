import './App.scss'
import Icon from './assets/unofficials.png'
import viteLogo from '/vite.svg'
import React, { useState } from 'react'

function App() {
  const discord = "https://discord.gg/y3pdKB672x"
  return (
    <body>
    <div class="topnav">
      <img class="image" src={ Icon }></img>
  <div class="active">
  <h1>Home</h1>
      </div>
</div>
      <div class="sub-content"> 
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp; 
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <center><img class="vite" src={viteLogo}></img> </center>
       <center>
       <h1>Welcome to unofficials</h1>
       <i>"We create roblox games."</i>
        </center>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp; 
        <div class="buttons">
      <a href="https://discord.gg/y3pdKB672x">
      <center><button class="button1">Join our discord!</button></center></a>
        </div>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      </div>
   </body>
  )
}

export default App
