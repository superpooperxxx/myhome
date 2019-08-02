import React from 'react';

const Project = ( props ) => {
        return (  
                <div className="project__item">
                        <img src={ props.img } alt="work"/>
                        <h5>{ props.header }</h5>
                        <p>{ props.p }</p>
                </div>
        );
}
 
export default Project;