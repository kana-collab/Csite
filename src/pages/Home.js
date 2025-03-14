import React from 'react';
// import Clients from '../components/Clients'; // eslint-disable-line no-unused-vars
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Work from '../components/work';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <Work />
            <Cta/>
            <Footer />
        </>
    )
}

export default Home;

