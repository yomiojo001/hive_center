import React from 'react';
import AppNavbar from './components/AppNavbar';
import Partner from "./components/Our-Partners";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;

