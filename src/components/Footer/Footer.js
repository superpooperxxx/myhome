import React from 'react';
import { Link } from 'react-router-dom';
import FooterContacts from './FooterContacts';
import FooterBar from './FooterBar';
const Footer = () => {
        const items = [
                {
                        classes: 'footer__links',
                        header: 'Quick Links',
                        links: [
                                <Link to="/" key="1"><span>Latest Events</span></Link>,
                                <Link to="/" key="2"><span>Terms and conditions</span></Link>,
                                <Link to="/" key="3"><span>Privacy policy</span></Link>,
                                <Link to="/" key="4"><span>Career</span></Link>,
                                <Link to="/contacts" key="5"><span>Contact us</span></Link>,
                        ]
                },
                {
                        classes: 'footer__posts',
                        header: 'Latest posts',
                        links: [
                                <Link to="/" key="1"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></Link>,
                                <Link to="/" key="2"><span>Pellentesque et pulvinar enim. Quisque at tempor ligula</span></Link>,
                                <Link to="/" key="3"><span>Natus error sit voluptatem accusantium doloremque</span></Link>,
                        ]
                },
                {
                        classes: 'ooter__news',
                        header: 'Recent News',
                        links: [
                                <Link to="/" key="1"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></Link>,
                                <Link to="/" key="2"><span>Pellentesque et pulvinar enim. Quisque at tempor ligula</span></Link>,
                                <Link to="/" key="3"><span>Natus error sit voluptatem accusantium doloremque</span></Link>,
                        ]
                }
                
        ]
        return (  
                <footer className="container page-section">
                        <div className="footer__info">
                                <FooterContacts />
                                {
                                        items.map(( item, id ) => {
                                                return <div className={item.classes} key={id}>
                                                        <h4>{ item.header }</h4>
                                                        { item.links }
                                                </div>
                                        })
                                }
                        </div>
                        <FooterBar />
                </footer>
        );
}
 
export default Footer;