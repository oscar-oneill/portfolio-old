import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.js';
import About from './Components/About.js';
import Portfolio from './Components/Portfolio.js';
import Home from './Components/Home.js';

import Register from './routes/Register.js';
import Submit from './routes/Submit.js';
import Blogs from './routes/Blogs.js';
import BlogPage from './routes/BlogPage.js';
import Update from './routes/Update.js';
import Login from './routes/Login.js';

import { AuthContext } from './Context/AuthContext';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Route exact path="/" component={Home}/>
        <ScrollToTop/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/blog" component={Blogs}/>
        <Route exact path="/blog/post/:id" component={BlogPage}/>
        <Route exact path="/blog/edit/:id" component={Update}/>
        <Route exact path="/submit" component={Submit}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Router>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
