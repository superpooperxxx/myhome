import React from 'react';

import img1 from '../../assets/img/service1.jpg';
import img2 from '../../assets/img/service2.jpg';
import img3 from '../../assets/img/service3.jpg';

import PropertyCard from '../Main/PropertyCard';
const ServicePropertyCards = () => {
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
        ]
        return (  
                <section className="page-section container recent service__property">
                        {
                                cards.map(( card, id) => {
                                        return <PropertyCard key={id}
                                                classes='recent__card'
                                                {...card}
                                                />
                                })
                        }
                </section>
        );
}
 
export default ServicePropertyCards;