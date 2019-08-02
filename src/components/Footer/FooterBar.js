import React from 'react';

const FooterBar = () => {
        const links = [
                {
                        link: 'https://facebook.com/',
                        i: <i className="fab fa-facebook-f"></i>
                },
                {
                        link: 'https://twitter.com/',
                        i: <i className="fab fa-twitter"></i>
                },
                {
                        link: 'https://linkedin.com/',
                        i: <i className="fab fa-linkedin-in"></i>
                },
                {
                        link: 'https://pinterest.com/',
                        i: <i className="fab fa-pinterest"></i>
                },
                {
                        link: 'https://google.com/',
                        i: <i className="fab fa-google-plus"></i>
                }
        ]
        return (  
                <div className="footer__bar">
                        <div className="footer__rights">© 2019 All right reserved</div>
                        <div className="footer__social">
                                {
                                        links.map(( link, id) => {
                                                return <a key={id} href={link.link}>{ link.i }</a>
                                        })
                                }
                        </div>
                </div>
        );
}
 
export default FooterBar;