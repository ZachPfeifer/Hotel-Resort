import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Utilities/Banner'
import { Link } from "react-router-dom";
import DinningOptions from '../components/DinningOptions'
import Dinner from "../components/Dinner";
import Lunch from "../components/Lunch";


const Resturant = () => {
  return (
    <React.Fragment>
      <Hero hero="resturantHero">
        <Banner title="Weclome to Pacific Edge" subtitle="In keeping with the family owned tradition of Lucia Lodge, the lodge restaurant offers true home-style cooking.">
          <Link to="/home" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <DinningOptions />
      <section id="Lunch">
        <Lunch />
      </section>
      <section id="Dinner">
        <Dinner />
      </section>
    </React.Fragment>
  )
}

export default Resturant
