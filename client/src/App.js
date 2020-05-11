import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import Venue from './components/Venue';
import About from './components/About';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }
  
  render(){
    return (
      <Provider store={store}>
        <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/venue" component={Venue} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
      </Router> 
      </Provider>
    );
  }
}
export default App;

