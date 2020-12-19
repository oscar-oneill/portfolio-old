import React from 'react';
import './App.css';
import Body from './components/Body';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navigation from './components/Navigation';

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
