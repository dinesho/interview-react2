import React, {useContext} from 'react';
import {ActivityContext} from "../ActivityContext";

function Header() {

    const value = useContext(ActivityContext);

    return (
        <div className="header">
            <h2>Activity Tracker</h2>
            <h4>Autobooks Interview Excercise</h4>
        </div>
    );
}

export default Header;
