import React from 'react';

import './App.css';
import ReducerHook from './components/ReducerHook';
import UseEffectHook from './components/useEffectHook';
import RefHook from './components/RefHook';
import LayoutEffect from './components/LayoutEffect';
import ImperativeHandle from './components/ImperativeHook/ImperativeHandle';
import ContextHook from './components/Context/ContextHook';
// ContextHook Theme
// import ThemeProvider from './components/ContextTheme/ThemeContext';
// import ThemeSwitcher from './components/ContextTheme/ThemeSwitcher';
// import Content from './components/ContextTheme/Content';
// ContextHook Language
import LanguageContext from './components/ContextHookLang/LanguageContext';
import TextComponent from './components/ContextHookLang/TextComponent';
const userLanguage = 'ger';


function App() {
  return (

    <>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>UseReducerHook</h2>
      <ReducerHook />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>UseEffectHook</h2>
      <UseEffectHook />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>RefHook</h2>
      <RefHook />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>LayoutEffectHook</h2>
      <LayoutEffect />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>UseImperativeHook</h2>
      <ImperativeHandle />
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>UseContextHook</h2>
      <ContextHook />

      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>ContextHookLang</h2>
      <LanguageContext.Provider value={userLanguage}>
        <TextComponent />
      </LanguageContext.Provider>
    </>
  )
  }
  export default App;
