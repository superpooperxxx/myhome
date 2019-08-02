import React from 'react';

import Feature from './Feature';
const Features = () => {
        const features = [
                {
                        icon: <i className="fas fa-home"></i>,
                        header: 'NEW PROJECTS',
                        content: 'Lorem ipsum dolor sitamet, consec tetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                },
                {
                        icon: <i className="fas fa-rocket"></i>,
                        header: 'READY TO MOVE',
                        content: 'Lorem ipsum dolor sitamet, consec tetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                },
                {
                        icon: <i className="fas fa-trophy"></i>,
                        header: 'COMMERCIAL',
                        content: 'Lorem ipsum dolor sitamet, consec tetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                },
                {
                        icon: <i className="fas fa-star"></i>,
                        header: 'GATED PROJECTS',
                        content: 'Lorem ipsum dolor sitamet, consec tetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident'
                }
        ]
        return (  
                <section className="features container">
                        {
                                features.map(( feature, id ) => {
                                        return <Feature key={id} {...feature}/>
                                })
                        }
                </section>
        );
}
 
export default Features;