import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Banner from './components/Banner';
import Hwork from './components/Hwork';
import LandingPage from './components/LandingPage'
import Partner from "./components/Our-Partners";
import Footer from "./components/Footer";
import VenueList from './components/VenueList';
import ItemModal from './components/itemModal'; 

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
      <div className="App">
      
        <AppNavbar />
        <Banner />
        <Hwork />
          {/* <ItemModal />
          <VenueList /> */}
        <LandingPage />
        <Partner />
        <Footer />     
      </div>
      </Provider>
    );
  }
}
export default App;

