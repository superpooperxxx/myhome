import React from 'react';

const TopBar = () => {
        return (  
                <section className="topbar container">
                        <div className="topbar__date"><i className="far fa-clock"></i> Mon - Sat 8.00 - 18.00. Sunday CLOSED</div>
                        <div className="topbar__phone"><i className="fas fa-phone-alt"></i> Tel No. (+001) 123-456-789</div>
                </section>
        );
}
 
export default TopBar;