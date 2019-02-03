import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import Banner from './Banner';
import QuickFacts from './QuickFacts';

const Hero = () => {
    return (
        <section>
            <Breadcrumbs></Breadcrumbs>
            <Banner></Banner>
            <QuickFacts></QuickFacts>
        </section>
    );
};

export default Hero;