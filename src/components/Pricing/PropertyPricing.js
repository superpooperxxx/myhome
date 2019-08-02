import React from 'react';

import SectionHeader from '../SectionHeader';
import PricingItem from './PricingItem';
const PropertyPricing = () => {
        const pricings = [
                {
                        name: 'Basic',
                        price: '15',
                        features: ['Responsive Design', 'Bootstrap Design']
                },
                {
                        name: 'Standart',
                        price: '20',
                        features: ['Responsive Design', 'Bootstrap Design', 'Unlimited Support']
                },
                {
                        name: 'Advanced',
                        price: '25',
                        features: ['Responsive Design', 'Bootstrap Design', 'Unlimited Support', 'Free Trial version']
                },
                {
                        name: 'Mighty',
                        price: '30',
                        features: ['Responsive Design', 'Bootstrap Design', 'Unlimited Support', 'Free Trial version', 'HTML5 CSS3 jQuery']
                }
        ]
        return (  
                <section className="container page-section">
                        <SectionHeader 
                                classes="section-header section-header__p--none"
                                success="Property"
                                header="pricing"
                                />
                                <p>
                                Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                <br/><br/>
                                Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                </p>
                        <div className="pricing">
                                {
                                        pricings.map(( item, id) => {
                                                return <PricingItem key={id} {...item}/>
                                        })
                                }
                        </div>
                </section>
        );
}
 
export default PropertyPricing;