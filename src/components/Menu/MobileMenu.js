import React from 'react';

import { NavLink } from 'react-router-dom';

const MobileMenu = ( props ) => {
                return (  
                        <nav className={props.opened === false ? 'mobile-menu mobile-menu--closed' : 'mobile-menu mobile-menu--opened'}>
                                {
                                        props.links.map(( link, id ) => {
                                                return <NavLink exact={link.exact} to={link.route} key={id} activeClassName="mobile-menu__link--white">
                                                        <li className='mobile-menu__link'>{link.title}</li>
                                                </NavLink>
                                        })
                                }
                        </nav>
                );
        
}
 
export default MobileMenu;