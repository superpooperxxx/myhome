import React from 'react';
import PageHeader from '../components/PageHeader';
import PropertyPricing from '../components/Pricing/PropertyPricing';
const Pricing = () => {
        return (  
                <main>
                        <PageHeader header="Pricing" />
                        <PropertyPricing />
                </main>
        );
}
 
export default Pricing;