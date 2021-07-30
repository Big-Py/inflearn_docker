import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

// import parseFunc from './parse/parseFunc.js';

function App() {
  const [moyaho,setMoyaho] = useState('not connected.');
  const [loa,setLoa] = useState('loa connect failed.');
  const [cont,setCont] = useState('ready.');
  

  function callMembers(){
    fetch('/api',{method:'GET'})
  .then(res=>res.json())
  .then(data=>{
    setMoyaho(data[0].name);
    console.log(data[0].name);
  });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MongoDB 연동중 {moyaho}
        </p><br/>
        <p>
          loatArk API 연동중 {loa}
        </p><br/>
        <div>
          <input id="char" className="searchbar" type="text"/><button className="entericon" onClick={callMembers}></button>
        </div>
        <div>
          {cont}
        </div>
      </header>
    </div>
  );
}

export default App;
