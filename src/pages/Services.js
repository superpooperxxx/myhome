import React from 'react';

import PageHeader from '../components/PageHeader';
import AwesomeService from '../components/Services/AwesomeService';
import ServicePropertyCards from '../components/Services/ServicePropertyCards';
const Services = () => {
        return (  
                <main className='recent-properties'>
                        <PageHeader header="services"/>
                        <AwesomeService />
                        <ServicePropertyCards />
                </main>
        );
}
 
export default Services;