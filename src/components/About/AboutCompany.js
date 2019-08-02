import React from 'react';

import img from '../../assets/img/dev1.png'
import SectionHeader from '../SectionHeader';
const AboutCompany = () => {
        return (  
                <section className="page-section container about-company__section">
                        <figure>
                                <img src={img} alt="developer 1"/>
                        </figure>
                        <aside>
                                <SectionHeader 
                                        classes="section-header section-header__p--none"
                                        success="About" 
                                        header="company"/>
                                <p>
                                Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.
                                <br/><br/>
                                Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..
                                </p>
                        </aside>
                </section>
        );
}
 
export default AboutCompany;