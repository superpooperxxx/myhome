import React from 'react';
import SectionHeader from '../SectionHeader';
import img5 from '../../assets/img/img5.jpg';
import img6 from '../../assets/img/img6.jpg';
import img7 from '../../assets/img/img7.jpg';
import img8 from '../../assets/img/img8.jpg';
import img9 from '../../assets/img/img9.jpg';
import img10 from '../../assets/img/img10.jpg';
import PropertyCard from './PropertyCard';

const RecentProjects = () => {
        const cards = [
                {
                        img: img5,
                        header: 'Apartments',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                },
                {
                        img: img6,
                        header: 'luxury Villas',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                },
                {
                        img: img7,
                        header: 'Gated Projects',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                },
                {
                        img: img8,
                        header: 'Apartments',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                },
                {
                        img: img9,
                        header: 'luxury Villas',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                },
                {
                        img: img10,
                        header: 'Gated Projects',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                },
        ]
        return (  
                <section className="page-section container recent-properties">
                        <SectionHeader 
                                classes="section-header"
                                success="recent"
                                header="properties">Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada Pellentesque psum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.</SectionHeader>
                        <div className="recent">
                                {
                                        cards.map(( card, id ) => {
                                                return <PropertyCard 
                                                        key={id}
                                                        classes="recent__card"
                                                        {...card}
                                                        />
                                        })
                                }
                        </div>
                </section>
        );
}
 
export default RecentProjects;