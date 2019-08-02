import React from 'react';

import SectionHeader from '../SectionHeader';

import img1 from '../../assets/img/works/1.jpg';
import img2 from '../../assets/img/works/2.jpg';
import img3 from '../../assets/img/works/3.jpg';
import img4 from '../../assets/img/works/4.jpg';
import img5 from '../../assets/img/works/5.jpg';
import img6 from '../../assets/img/works/6.jpg';

import Project from './Project';
import FilterLinks from './FilterLinks';
class BestProjects extends React.Component {
        state = {
                filter: 'all',
                items: [
                        {
                                types: ['all', 'appartments', 'villas'],
                                img: img1,
                                header: '1st gallery Item',
                                p: 'Nullam id dolor id nibh ultricies vehicula.'
                        },
                        {
                                types: ['all', 'commercial', 'gated'],
                                img: img2,
                                header: '2st gallery Item',
                                p: 'Nullam id dolor id nibh ultricies vehicula.'
                        },
                        {
                                types: ['all', 'appartments', 'housing'],
                                img: img3,
                                header: '3st gallery Item',
                                p: 'Nullam id dolor id nibh ultricies vehicula.'
                        },
                        {
                                types: ['all', 'commercial'],
                                img: img4,
                                header: '4st gallery Item',
                                p: 'Nullam id dolor id nibh ultricies vehicula.'
                        },
                        {
                                types: ['all', 'commercial', 'villas'],
                                img: img5,
                                header: '5st gallery Item',
                                p: 'Nullam id dolor id nibh ultricies vehicula.'
                        },
                        {
                                types: ['all', 'appartments', 'villas'],
                                img: img6,
                                header: '6st gallery Item',
                                p: 'Nullam id dolor id nibh ultricies vehicula.'
                        }
                ]
        }
        // NEW FILTER PROP
        filterHandler = (type) => {
                this.setState({filter: type});
        }
        // UPDATE UI
        componentDidUpdate(){
                this.outPutHandler();
        }
        // UI HANDLER
        outPutHandler = () => {
                let output = [];
                this.state.items.forEach(item => {
                        item.types.forEach(type => {
                                if(type === this.state.filter){
                                        output.push(item);
                                }
                        })
                })
                return output;
        }

        render() { 
                return (  
                        <section className="page-section container">
                                <SectionHeader 
                                        classes="section-header section-header--left"
                                        success="awesome"
                                        header="service">Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                        <br/><br/>
                                        Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</SectionHeader>
                                <div className="projects">
                                        <FilterLinks filter={this.filterHandler}/>
                                        <div className="projects__gallery">
                                                {
                                                        this.outPutHandler().map(( item, id) => {
                                                                return <Project key={id} {...item} />
                                                        })
                                                }
                                        </div>
                                </div>
                        </section>
                );
        }
}
 
export default BestProjects;