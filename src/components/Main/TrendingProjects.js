import React from 'react';

import SectionHeader from '../SectionHeader';

import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img4 from '../../assets/img/img4.jpg';

import PropertyCard from '../Main/PropertyCard';

const TrendingProjects = () => {
        const cards = [
                {
                        img: img1,
                        header: 'Apartments',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                },
                {
                        img: img2,
                        header: 'luxury Villas',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                },
                {
                        img: img3,
                        header: 'Gated Projects',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                },
                {
                        img: img4,
                        header: 'Apartments',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                }
        ]
        return (  
                <section className="page-section container">
                        <SectionHeader 
                                classes="section-header"
                                success="trending" 
                                header="projects">Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada Pellentesque psum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.</SectionHeader>
                        <div className="trending">
                                {
                                        cards.map(( card, id ) => {
                                                return <PropertyCard 
                                                        key={id}
                                                        classes="trending__card"
                                                        {...card}
                                                        />
                                        })
                                }
                        </div>
                </section>
        );
}
 
export default TrendingProjects;