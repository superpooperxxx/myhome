import React from 'react';

import Menu from './Menu';
import MobileMenu from './MobileMenu';
class MenuContainer extends React.Component {
        state = {
                mobileMenuOpened: false,
                links: [
                        {
                                exact: true,
                                route: '/',
                                title: 'home'
                        },
                        {
                                route: '/about',
                                title: 'about us'
                        },
                        {
                                route: '/services',
                                title: 'services'
                        },
                        {
                                route: '/projects/',
                                title: 'projects'
                        },
                        {
                                route: '/pricing',
                                title: 'pricing'
                        },
                        {
                                route: '/contacts',
                                title: 'contacts'
                        },
                ]
        }
        setMobileMenuOpened = () => {
                this.setState({mobileMenuOpened: !this.state.mobileMenuOpened});
        }
        render() { 
                return (  
                        <>
                        <Menu 
                                links={this.state.links} 
                                open={this.setMobileMenuOpened}/>
                        <MobileMenu 
                                links={this.state.links} 
                                opened={this.state.mobileMenuOpened}/>
                        </>
                );
        }
}
 
export default MenuContainer;