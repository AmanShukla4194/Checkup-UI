import React from 'react';
// import Navbar from './components/navbar/Navbar'  for not doing it all separate
import {Navbar} from './components';
import './App.css'

function App() {
  return (
   <div className="App">
    <div className="gradient__bg">
      <Navbar/>
    </div>

   </div>
  );
}

export default App;