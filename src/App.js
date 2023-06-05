import React from 'react';
// import Navbar from './components/navbar/Navbar'  for not doing it all separate
import {First,Login,Forgotpassword} from './components';
import FullPage from './pages/FullPage'
import './App.css'

import {
  // BrowserRouter as Router,   // already impoorted in src/index.js
  Routes, // In new version switch is changed to Routes
  Route,
} from "react-router-dom"; 


function App() {
  return (
    <>
    <Routes>
          <Route exact path="/" Component={First}>
          </Route>
          <Route exact path="/Login" Component={Login}>
          </Route>
          <Route exact path="/FullPage" Component={FullPage}>
          </Route>
          <Route exact path="/Forgotpassword" Component={Forgotpassword}>
          </Route>
    </Routes>
   </>
  );
}

export default App;


