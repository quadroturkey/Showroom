import React from 'react';
import MainPage from './Components/MainPage';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserPage from './Components/UserPage'


function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/user/:id" component={UserPage} />
      </Router>
      {/* <MainPage /> */}
    </div>
  );
}

export default App;
