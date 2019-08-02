import React from 'react';

const PageHeader = ( props ) => {
        return (  
                <header className="page-header">
                        <div className="page-header__fade"></div>
                        <h2>{ props.header }</h2>
                </header>
        );
}
 
export default PageHeader;