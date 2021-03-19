import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './pages/Navigation';
import Home from './pages/Home';
import Search from './pages/Search';
import Article from './pages/Article';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search/:term' component={Search} />
          <Route path='/article/:id' component={Article} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
