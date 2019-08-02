import React from 'react';

import { NavLink } from 'react-router-dom';
const FilterLinks = ( props ) => {
        const links = [
                {
                        path: '/projects/all',
                        title: 'all'
                },
                {
                        path: '/projects/appartments',
                        title: 'appartments'
                },
                {
                        path: '/projects/villas',
                        title: 'villas'
                },
                {
                        path: '/projects/commercial',
                        title: 'commercial'
                },
                {
                        path: '/projects/gated',
                        title: 'gated'
                },
                {
                        path: '/projects/housing',
                        title: 'housing'
                }
        ]
        return (  
                <nav>
                        {
                                links.map(( link, id) => {
                                        return <NavLink to={link.path} key={id} activeClassName="projects__li--active" onClick={() => props.filter(link.title)}>
                                                <li>{ link.title }</li>
                                        </NavLink>
                                })
                        }
                </nav>
        );
}
 
export default FilterLinks;