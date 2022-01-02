import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.js';

import Register from './routes/Register.js';
import Submit from './routes/Submit.js';
import Blogs from './routes/Blogs.js';
import BlogPage from './routes/BlogPage.js';
import Update from './routes/Update.js';
import Login from './routes/Login.js';
import { AppContextProvider } from './Context/AppContext';
import Main from './Components/Main'

const App = () => {
  return (
    <div className="App">
    <AppContextProvider>
      <Router>
        <ScrollToTop/>
        <Route exact path="/" component={Main}/>
        <Route exact path="/blog" component={Blogs}/>
        <Route exact path="/blog/post/:id" component={BlogPage}/>
        <Route exact path="/blog/edit/:id" component={Update}/>
        <Route exact path="/submit" component={Submit}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Router>
    </AppContextProvider>
    </div>
  );
}

export default App;
