// Content.js
import React ,{useContext}from 'react';
import ThemeContext from './ThemeContext';

function Content() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

function Header() {
  const { theme } = useContext(ThemeContext);

  return <header className={`header ${theme}`}>App Header</header>;
}

function MainContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`main-content ${theme}`}>
      <p>This is the main content of the app.</p>
    </div>
  );
}

export default Content;
