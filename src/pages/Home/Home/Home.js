import React from 'react';
import Advantage from '../Advantage/Advantage';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import Toys from '../Toys/Toys';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Toys></Toys>
            {/* <Reviews></Reviews> */}
            <Advantage></Advantage>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;