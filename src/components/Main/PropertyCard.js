import React from 'react';

const PropertyCard = ( props ) => {
        return (  
                <div className={ props.classes }>
                        <img src={ props.img } alt="property"/>
                        <h4>{ props.header }</h4>
                        <p>{ props.content }</p>
                </div>
        );
}
 
export default PropertyCard;