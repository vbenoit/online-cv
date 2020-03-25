import React, { useState } from 'react';
import './App.css';
import CircleMenu from './CircleMenu';
import MainContent from './MainContent';
import { en, fr, langSelected } from './Consts';

const circleMenuBasisClass = "Circle-menu-basis";
const circleMenuInClass = "Circle-menu-in";
const circleMenuOutClass = "Circle-menu-out";

function App() {

  const [circleMenuClass, setCircleMenuClass] = useState(circleMenuBasisClass);
  const [contentType, setContentType] = useState("default");
  // TODO all occurences of "fr_FR" / "en_EN" in consts files
  const [lang, setLang] = useState(fr);
  const [enSelected, setEnSelected] = useState("");
  const [frSelected, setFrSelected] = useState(langSelected);

  function changeLang(pLang){
    return function (){
      setLang(pLang);
      if ( pLang === fr ){
        // TODO add to consts
        setFrSelected(langSelected);
        setEnSelected("");
      }
      else {
        setFrSelected("");
        setEnSelected(langSelected);
      }
    }
  }

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
    + add sound?
  */

  return (
    <div className="app">
      <header className="app_header">
        <div className="app_header-name">
          <div>Vincent BENOIT</div>
          <div className="console_green" >Senior full stack developer</div>
        </div>
        <div className="app_header-menu_toggle" >
          <button className="menu_button" onClick={toggleCircleMenuClass} >
            Menu
          </button>
        </div>
        <div className="app_header-lang">
          <span className={enSelected} onClick={changeLang("en_EN")} >EN</span>&nbsp;/&nbsp;
          <span className={frSelected} onClick={changeLang("fr_FR")} >FR</span>
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
