import React from 'react'
import Hero from '../components/Utilities/Hero'
import Banner from '../components/Utilities/Banner'
import { Link } from "react-router-dom";
import Services from '../components/Services'
import FeaturedRooms from '../components/Rooms/FeaturedRooms'
import Gallery from "../components/Gallery";



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
      <Gallery />
    </React.Fragment>
  )
}

export default Home
