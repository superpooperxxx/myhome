import React from 'react';

const Feature = ( props ) => {
        return (  
                <article className="features__feature">
                        <header className="feature__header">{ props.icon }</header>
                        <main className="feature__main">
                                <h3>{ props.header }</h3>
                                <p>{ props.content }</p>
                        </main>
                </article>
        );
}
 
export default Feature;