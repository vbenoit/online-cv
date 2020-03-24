import React, { useState } from 'react';
import './App.css';
import CircleMenu from './CircleMenu';
import MainContent from './MainContent';

const circleMenuBasisClass = "Circle-menu-basis";
const circleMenuInClass = "Circle-menu-in";
const circleMenuOutClass = "Circle-menu-out";

function App() {

  const [circleMenuClass, setCircleMenuClass] = useState(circleMenuBasisClass);
  const [contentType, setContentType] = useState("default");
  const [lang, setLang] = useState("fr_FR");

  function toggleCircleMenuClass() {
    if (circleMenuClass === circleMenuBasisClass) {
      setCircleMenuClass(circleMenuInClass);
    }
    else if (circleMenuClass === circleMenuInClass) {
      setCircleMenuClass(circleMenuOutClass);
    }
    else if (circleMenuClass === circleMenuOutClass) {
      setCircleMenuClass(circleMenuInClass);
    }
  }

  function changePage(pageName) {
    setContentType(pageName);
    toggleCircleMenuClass();
  }

  /* 
    + nouveau bouton 
    + ajouter logo vbenoit ou Vincent BENOIT écrit avec une jolie font
    + made with react 
    + switch fr/en 
    + flèches pour menu 
    + contenu 
    + quelques logo
    + ajouter lien vers le dépôt github comme exemple de code
  */

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
          <MainContent type={contentType} lang={lang} />
        </section>
        <nav>
          <CircleMenu onClick={changePage} circleMenuClass={circleMenuClass} />
        </nav>
      </main>
    </div>
  );
}

export default App;
