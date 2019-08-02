import React from 'react';

import img from '../../assets/img/about.jpg'
import { Link } from 'react-router-dom';
import SuccessBtn from '../SuccessBtn';
const OurOrganization = ( props ) => {
        const lis = [
                {
                        i: <i className="far fa-arrow-alt-circle-right"></i>,
                        content: 'Lorem ipsum dolor sit amet.'
                },
                {
                        i: <i className="far fa-arrow-alt-circle-right"></i>,
                        content: 'Consectetur adipiscing elit.'
                },
                {
                        i: <i className="far fa-arrow-alt-circle-right"></i>,
                        content: 'Curabitur aliquet quam id dui.'
                },
                {
                        i: <i className="far fa-arrow-alt-circle-right"></i>,
                        content: 'Donec sollicitudin molestie malesuada.'
                }
        ]
        return (  
                <div className={ props.classes }>
                        <aside>
                                <h4>Our Organization</h4>
                                <p>Grids is a responsive Multipurpose Template. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                                <ul>
                                        {
                                                lis.map(( li, id) => {
                                                        return <li key={id} >
                                                                { li.i }
                                                                { li.content }
                                                        </li>
                                                })
                                        }
                                </ul>
                                <Link to="/about"><SuccessBtn>Learn more</SuccessBtn></Link>
                        </aside>
                        <figure>
                                <img src={img} alt="about"/>
                        </figure>
                </div>
        );
}
 
export default OurOrganization;