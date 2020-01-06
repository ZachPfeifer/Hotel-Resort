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
        <Banner title="Welcome to The Lucia Lodge" subtitle="In keeping with the family owned tradition of Lucia Lodge, the lodge restaurant offers true home-style cooking.">
          <Link to="/home" className="btn-primary">
            Return Home
        </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  )
}

export default Home
