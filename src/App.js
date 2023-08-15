import React from 'react';

import './App.css';
import ReducerHook from './components/ReducerHook';
import UseEffectHook from './components/useEffectHook';
import UseEffectHookk from './components/useEffectHookk';
import RefHook from './components/RefHook';
import LayoutEffect from './components/LayoutEffect';
import ImperativeHandle from './components/ImperativeHook/ImperativeHandle';
import ContextHook from './components/Context/ContextHook';
import StateHook from './components/StateHook';
// ContextHook Theme
// import ThemeProvider from './components/ContextTheme/ThemeContext';
// import ThemeSwitcher from './components/ContextTheme/ThemeSwitcher';
// import Content from './components/ContextTheme/Content';
// ContextHook Language
import LanguageContext from './components/ContextHookLang/LanguageContext';
import TextComponent from './components/ContextHookLang/TextComponent';
import Memo from './components/Memo';
const userLanguage = 'ger';


function App() {
  return (

    <>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>State Hook</h2>
      <StateHook />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>Effect Hook</h2>
      <UseEffectHook />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>Effect Hookk</h2>
      <UseEffectHookk />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>Reducer Hook</h2>
      <ReducerHook />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>Context Hook</h2>
      <ContextHook />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>Context Hook Language</h2>
      <LanguageContext.Provider value={userLanguage}>
        <TextComponent />
      </LanguageContext.Provider>
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>RefHook</h2>
      <RefHook />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>LayoutEffect Hook</h2>
      <LayoutEffect />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>Imperative Hook</h2>
      <ImperativeHandle />
      <hr></hr>
      <h2 style={{ color: 'red', letterSpacing: '2px', fontFamily: 'cursive' }}>Memo Hook</h2>
      <Memo/>


      <hr></hr><hr></hr>

    </>
  )
}
export default App;
