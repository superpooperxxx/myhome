import React from 'react';

import PageHeader from '../components/PageHeader';
import BestProjects from '../components/Projects/BestProjects';
const Projects = () => {
        return (  
                <main>
                        <PageHeader header="projects"/>
                        <BestProjects />
                </main>
        );
}
 
export default Projects;