import React from 'react';
import SectionHeader from '../SectionHeader';
import OurOrganization from './OurOrganization';

const Company = () => {
        return (  
                <section className="page-section container">
                        <SectionHeader 
                        classes="section-header"
                        success="About" 
                        header="our company">Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada Pellentesque psum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.</SectionHeader>
                        <OurOrganization classes="organization"/>
                </section>
        );
}
 
export default Company;