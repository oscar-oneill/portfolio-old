import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}/>
        <ScrollToTop/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Router>
    </div>
  );
}

export default App;
