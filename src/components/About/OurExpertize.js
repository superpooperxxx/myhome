import React from 'react';
import Progress from './Progress';

const OurExpertize = () => {
        const progresses = [
                {
                        p: 'Web Development',
                        max: '100',
                        value: '40',
                        classes: 'web__progress'
                },
                {
                        p: 'Designing',
                        max: '100',
                        value: '55',
                        classes: 'designing__progress'
                },
                {
                        p: 'User Experience',
                        max: '100',
                        value: '70',
                        classes: 'exp__progress'
                },
                {
                        p: 'Development',
                        max: '100',
                        value: '20',
                        classes: 'dev__progress'
                }
        ]
        return (  
                <article className="our-expertise">
                        <h3>Our Expertise</h3>
                        {
                                progresses.map(( progress, id) => {
                                        return <Progress key={id} {...progress}/>
                                })
                        }
                </article>
        );
}
 
export default OurExpertize;