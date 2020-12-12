import React from 'react'
import './App.css';
import Car from './car.js';



function App() {
  return(
    <div className = "App">
    <Car carName = "HONDA" />
    <Car carName = "AUDI" />
    <Car carName = "BMW" />
    <Car carName = "MAC" />
    </div>
  );

}
export default App;
