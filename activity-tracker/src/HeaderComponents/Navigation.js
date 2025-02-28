import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <div className="navigation">
            <hr/>
            <NavLink exact={true} to="/" activeClassName="active"><button className="nav-link"><i className="fas fa-user-clock"></i> CLOCK IN/OUT</button></NavLink>
            <NavLink exact={true} to="/grid" activeClassName="active"><button className="nav-link"><i className="fas fa-database"></i> ACTIVITY GRID</button></NavLink>
        </div>
    );
}

export default Navigation;
