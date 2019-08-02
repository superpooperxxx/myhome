import React from 'react';

// Components

import Hero from '../components/Main/Hero';
import Features from '../components/Main/Features';
import TrendingProjects from '../components/Main/TrendingProjects';
import RecentProperties from '../components/Main/RecentProperties';
import Company from '../components/Main/Company';
const Home = () => {
        return (  
                <main className="home-page">
                        <Hero />
                        <Features />
                        <TrendingProjects />
                        <RecentProperties />
                        <Company />
                </main>
        );
}
 
export default Home;