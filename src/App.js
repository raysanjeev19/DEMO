import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Content from './components/Content';
import Card from './components/Card';

function App() {
  const [darkMode, setDarkMode] = useState(true); // State for dark mode

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle dark mode
  };

  return (
    <div  className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Body/>
      <Content/>
      <Card/>
    </div>
  
  );
}

export default App;
