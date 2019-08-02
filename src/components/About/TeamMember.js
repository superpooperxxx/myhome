import React from 'react';

const TeamMember = ( props ) => {
        return (  
                <div className="team__member">
                        <img src={ props.img } alt="member"/>
                        <h5>{ props.name }</h5>
                        <p>{ props.job }</p>
                </div>
        );
}
 
export default TeamMember;