import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element = {<Home />}></Route>
              <Route path="/about" element = {<About/>}></Route>          
              <Route path="/register" element = {<Register/>}></Route>          
              <Route path="/login" element = {<Login/>}></Route>         
          </Routes>
          {/* <Footer /> */}
        </Router>
    </div>
  );
}

export default App;
