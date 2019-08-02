import React from 'react';

const Service = ( props ) => {
        return (  
                <div className="services__service">
                        <div className="service__icon">{ props.icon }</div>
                        <div className="service__content">
                                <h3>{ props.header }</h3>
                                <p>{ props.p }</p>
                        </div>
                </div>
        );
}
 
export default Service;