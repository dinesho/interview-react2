import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>Activity Tracker</h2>
        <h4>Autobooks Interview Excercise</h4>

      </div>

      <div className="navigation">
        <button className="nav-link active">CLOCK IN/OUT</button>
        <button className="nav-link">ACTIVITY GRID</button>
        <hr/>
      </div>

      <div className="new-activity">
        <p>Add description below and click "Start Activity" to clock in</p>
        <textarea></textarea><br/>
        <button>Start Activity</button>
      </div>

      <h4>Activities In Progress</h4>

      <div className="active-list">
        <div className="activity">
          <p>Description goes here lorem ipsum dolar sit amet goes here lorem ipsum dolar sit amet</p>
          <p className="time">Time Passed (HH:MM:SS) : 00:25:36</p>
          <button className="success">End Activity</button>
          <span className="clear"></span>
        </div>
        <div className="activity">
          <p>Description goes here</p>
          <p className="time">Time Passed (HH:MM:SS) : 00:25:36</p>
          <button className="success">End Activity</button>
          <span className="clear"></span>
        </div>
        <div className="activity">
          <p>Description goes here</p>
          <p className="time">Time Passed (HH:MM:SS) : 00:25:36</p>
          <button className="success">End Activity</button>
          <span className="clear"></span>
        </div>
      </div>

      <div className="activity-grid">
        <table>
          <tr>
            <th> Description</th>
            <th> Start Time</th>
            <th> End Time</th>
            <th> Duration</th>
          </tr>
          <tr>
            <td> This is the activity description</td>
            <td> 9.55.56</td>
            <td> 10.30.56</td>
            <td> 00:30:36</td>
          </tr>
          <tr>
            <td> This is the activity description</td>
            <td> 9.55.56</td>
            <td> 10.30.56</td>
            <td> 00:30:36</td>
          </tr>
          <tr>
            <td> This is the activity description</td>
            <td> 9.55.56</td>
            <td> 10.30.56</td>
            <td> 00:30:36</td>
          </tr>
          <tr>
            <td> This is the activity description</td>
            <td> 9.55.56</td>
            <td> 10.30.56</td>
            <td> 00:30:36</td>
          </tr>
        </table>
      </div>

    </div>
  );
}

export default App;
