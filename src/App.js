import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Hero />
        <Body />
        <Contact />
    </div>
  );
}

export default App;
