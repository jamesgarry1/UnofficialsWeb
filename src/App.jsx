import './App.scss'
import Icon from './assets/unofficials.png'
import viteLogo from '/vite.svg'
import React, { useState } from 'react'

function App() {
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
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      </div>
   </body>
  )
}

export default App
