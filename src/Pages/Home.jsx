import React from 'react';
import TopDonators from '../components/TopDonators';
import WhyDonate from '../components/WhyDonate';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <TopDonators></TopDonators>
                <WhyDonate></WhyDonate>
        </div>
    );
};

export default Home;