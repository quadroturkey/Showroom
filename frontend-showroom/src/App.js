import React, { Component } from 'react';
import MainPage from './Components/MainPage';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UserPage from './Components/UserPage'
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  loginStatus = () => {
    axios.get('http://localhost:3000/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/login' component={}/>
            <Route exact path='/signup' component={}/>
            <Route exact path="/user/:id" component={UserPage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
