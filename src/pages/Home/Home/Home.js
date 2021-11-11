import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Toys from '../Toys/Toys';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Toys></Toys>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;