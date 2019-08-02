import React from 'react';

import img1 from '../../assets/img/team1.jpg';
import img2 from '../../assets/img/team2.jpg';
import img3 from '../../assets/img/team3.jpg';
import img4 from '../../assets/img/team4.jpg';
import TeamMember from './TeamMember';
const Team = () => {
        const team = [
                {
                        img: img1,
                        name: 'Jennifer',
                        job: 'Creative'
                },
                {
                        img: img2,
                        name: 'Johne Doe',
                        job: 'Programmer'
                },
                {
                        img: img3,
                        name: 'Christean',
                        job: 'CEO'
                },
                {
                        img: img4,
                        name: 'Kerinele rase',
                        job: 'Manager'
                }
        ]
        return (  
                <section className="page-section container team">
                        {
                                team.map((member, id) => {
                                        return <TeamMember key={id} {...member}/>
                                })
                        }
                </section>
        );
}
 
export default Team;