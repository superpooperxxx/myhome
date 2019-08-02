import React from 'react';

import SuccessBtn from '../SuccessBtn';

const PricingItem = ( props ) => {
        return (  
                <div className="pricing__item">
                        <h3>{ props.name }</h3>
                        <div className="price">{ props.price } / Year</div>
                        <div className="includes">
                                <div className="include">Responsive Design</div>
                                <div className="include">Bootstrap Design</div>
                                <div className={props.features[2] === undefined ? 'include include--light-gray' : 'include'}>Unlimited Support</div>
                                <div className={props.features[3] === undefined ? 'include include--light-gray' : 'include'}>Free Trial version</div>
                                <div className={props.features[4] === undefined ? 'include include--light-gray' : 'include'}>HTML5 CSS3 jQuery</div>
                        </div>
                <div className="pricing-btn__container"><SuccessBtn>Get Now</SuccessBtn></div>
        </div>
        );
}
 
export default PricingItem;