import React from 'react';

import { NavLink, Link } from 'react-router-dom';

const Menu = ( props ) => {
                return (  
                        <header className="menu container">
                                <Link to="/"><div className="menu__logo">My<span>Home</span></div></Link>
                                <nav>
                                        {
                                                props.links.map(( link, id ) => {
                                                        return <NavLink exact={link.exact} to={link.route} key={id} activeClassName="menu__link--green"> 
                                                                <li className="menu__link">{link.title}</li>
                                                        </NavLink>
                                                })
                                        }
                                </nav>
                                <i className="fas fa-bars menu__icon" onClick={() => props.open()}></i>
                        </header>
                );
        
}
 
export default Menu;