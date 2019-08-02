import React from 'react';

const Progress = ( props ) => {
        return (  
                <>
                        <p>{ props.p }</p>
                        <progress max={ props.max } value={ props.value } className={ props.classes }></progress>
                </>
        );
}
 
export default Progress;