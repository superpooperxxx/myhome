import React from 'react';
import OurExpertize from './OurExpertize';
import OurSolution from './OurSolution';
import WhyChooseUs from './WhyChooseUs';

const AboutUs = () => {
        return (  
                <section className="page-section container about-us">
                        <WhyChooseUs />
                        <OurSolution />
                        <OurExpertize />
                </section>
        );
}
 
export default AboutUs;