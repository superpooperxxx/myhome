import React from 'react';
import PageHeader from '../components/PageHeader';
import AboutCompany from '../components/About/AboutCompany';
import AboutUs from '../components/About/AboutUs';
import OurOrganization from '../components/Main/OurOrganization';
import Team from '../components/About/Team';

const About = () => {
        return (  
                <main>
                        <PageHeader header="About"/>
                        <AboutCompany />
                        <AboutUs />
                        <OurOrganization classes="organization organization__about-section container page-section"/>
                        <Team />
                </main>
        );
}
 
export default About;