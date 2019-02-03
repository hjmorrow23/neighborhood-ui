import React from 'react';
import LowerNav from './LowerNav';
import NeighborhoodDetails from './NeighborhoodDetails';
import NeighborhoodAgent from './NeighborhoodAgent';

const Content = () => {
    return (
        <section>
            <LowerNav></LowerNav>
            <NeighborhoodDetails></NeighborhoodDetails>
            <NeighborhoodAgent></NeighborhoodAgent>
        </section>
    );
};

export default Content;