import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import CircleMenu from './CircleMenu';

const circleMenuBasisClass = "Circle-menu-basis";
const circleMenuInClass = "Circle-menu-in";
const circleMenuOutClass = "Circle-menu-out";

function App() {

  const [circleMenuClass, setCircleMenuClass] = useState(circleMenuBasisClass);

  function toggleCircleMenuClass(){
    if (circleMenuClass === circleMenuBasisClass){
      setCircleMenuClass(circleMenuInClass);
    }
    else if (circleMenuClass === circleMenuInClass){
      setCircleMenuClass(circleMenuOutClass);
    }
    else if (circleMenuClass === circleMenuOutClass){
      setCircleMenuClass(circleMenuInClass);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="menu-toggle" >
          <button id="menu-button" onClick={toggleCircleMenuClass} >
            Menu
          </button>
        </div>
      </header>
      <main>
        <section>
          {/* <img src={logo} className={circleMenuClass} alt="logo" /> */}
          <CircleMenu circleMenuClass={circleMenuClass} />
        </section>
      </main>
    </div>
  );
}

export default App;
