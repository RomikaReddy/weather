import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Components/location';
import Addlocation from './Components/addlocation';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Weather/>}> </Route>
      <Route path="/add" element={<Addlocation/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
