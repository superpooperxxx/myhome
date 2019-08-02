import React from 'react';

const SectionHeader = ( props ) => {
        return (  
                <header className={ props.classes }>
                        <h2><span>{ props.success }</span> { props.header }</h2>
                        <p>{ props.children }</p>
                </header>
        );
}
 
export default SectionHeader;