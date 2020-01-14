import React from 'react';
import AppNavbar from './components/AppNavbar';
import LandingPage from './components/LandingPage';
// import Carousels from './components/Carousels'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <LandingPage/>
      {/* <Carousels/> */}
    </div>
  );
}

export default App;
