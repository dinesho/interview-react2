import React from 'react';
import logo from './logo.svg';
import './App.css';

import NewActivity from "./NewActivity/NewActivity";
import ActiveList from "./ActiveList/ActiveList";
import ActivityGrid from "./ActivityGrid/ActivityGrid";
import Header from "./HeaderComponents/Header";
import Navigation from "./HeaderComponents/Navigation";


function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <NewActivity/>
      <ActiveList/>
      <ActivityGrid/>
    </div>
  );
}

export default App;
