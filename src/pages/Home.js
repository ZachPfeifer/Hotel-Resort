import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from "react-router-dom";
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'



const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="Welcome to The Lucia Lodge" subtitle="Over 100 years of Hospitality">
          <Link to="/rooms" className="btn-primary">
            our rooms
        </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  )
}

export default Home
