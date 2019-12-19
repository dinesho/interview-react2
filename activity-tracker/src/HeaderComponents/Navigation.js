import React from 'react';
import {NavLink, Link} from 'react-router-dom';

function Navigation() {
    return (
        <div className="navigation">
            <hr/>
            <NavLink exact={true} to="/" activeClassName="active"><button className="nav-link active">CLOCK IN/OUT</button></NavLink>
            <NavLink exact={true} to="/grid" activeClassName="active"><button className="nav-link">ACTIVITY GRID</button></NavLink>
        </div>
    );
}

export default Navigation;
