import React from 'react'
import Header from '../Components/header'
import FeaturedDestination from '../Components/featuredDestination'
import Title from '../Components/Title'
import ExclusiveOffers from '../Components/ExclusiveOffers'
import Testimonial from '../Components/Testimonial'
import NewsLetter from '../Components/Newsletter'


const Home = () => {
    return (
        <div>
            <Header />
            <Title />
            <FeaturedDestination />
            <ExclusiveOffers />
            <Testimonial/>
            <NewsLetter/>
        </div>
    )
}

export default Home
