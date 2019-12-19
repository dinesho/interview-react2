import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div className="navigation">
            <hr/>
            <Link to="/"><button className="nav-link active">CLOCK IN/OUT</button></Link>
            <Link to="/grid"><button className="nav-link">ACTIVITY GRID</button></Link>
        </div>
    );
}

export default Navigation;
