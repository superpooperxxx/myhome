import React from 'react';
import SectionHeader from '../SectionHeader';
import Service from './Service';
const AwesomeService = () => {

        const services = [
                {
                        icon: <i className="far fa-bell"></i>,
                        header: 'Awesome Design',
                        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt'
                },
                {
                        icon: <i className="fab fa-font-awesome"></i>,
                        header: 'Font Awesome',
                        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt'
                },
                {
                        icon: <i className="fab fa-bootstrap"></i>,
                        header: 'Bootstrap',
                        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt'
                },
                {
                        icon: <i className="fas fa-code"></i>,
                        header: 'SEO Ready',
                        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt'
                },
                {
                        icon: <i className="fas fa-expand-arrows-alt"></i>,
                        header: 'Fully Responsive',
                        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt'
                },
                {
                        icon: <i className="fab fa-html5"></i>,
                        header: 'CSS3 + HTML5',
                        p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt'
                }
        ]
        return (  
                <section className="page-section container">       
                        <SectionHeader 
                                classes="section-header section-header--left"
                                success="awesome"
                                header="service">Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                <br/><br/>
                                Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</SectionHeader>
                        <div className="services">
                                {
                                        services.map(( service, id) => {
                                                return <Service key={id} {...service}/>
                                        })
                                }
                        </div>
                </section>
        );
}
 
export default AwesomeService;