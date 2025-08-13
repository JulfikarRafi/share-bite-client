import React from 'react';
import TopDonators from '../components/TopDonators';
import WhyDonate from '../components/WhyDonate';
import Banner from '../components/Banner';
import FeaturedFood from '../components/FeaturedFood';
import ContactUs from './ContactUs';


const Home = () => {

    return (
        <div>

            <Banner></Banner>
            <FeaturedFood></FeaturedFood>
            <TopDonators></TopDonators>
            <WhyDonate></WhyDonate>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;


