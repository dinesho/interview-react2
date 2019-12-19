import React from 'react';
import './App.css';

import NewActivity from "./NewActivity/NewActivity";
import ActiveList from "./ActiveList/ActiveList";
import ActivityGrid from "./ActivityGrid/ActivityGrid";
import Header from "./HeaderComponents/Header";
import Navigation from "./HeaderComponents/Navigation";

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ActivityProvider} from "./ActivityContext";

function App() {

  return (

      <ActivityProvider>
      <Router>
            <div className="App">
              <Header/>
              <Navigation/>
                <Route path="/" exact component={NewActivity} />
                <Route path="/" exact component={ActiveList} />
                <Route path="/grid" exact component={ActivityGrid} />
            </div>
      </Router>
      </ActivityProvider>
  );
}


export default App;
