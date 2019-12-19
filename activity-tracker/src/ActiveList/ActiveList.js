import React from 'react';

function ActiveList() {
    return (
        <div className="active-list">

            <h4>Activities In Progress</h4>

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
    );
}

export default ActiveList;
