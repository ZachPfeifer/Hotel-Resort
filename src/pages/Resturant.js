import React from 'react'
import Hero from '../components/Utilities/Hero'
import Banner from '../components/Utilities/Banner'
import { Link } from "react-router-dom";
import DinningOptions from '../components/Resturant/DinningOptions'
import Dinner from "../components/Resturant/Dinner";
import Lunch from "../components/Resturant/Lunch";
import Alcohol from '../components/Resturant/Alcohol';


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
      <div className="space">      </div>
      <section id="Dinner">
        <Dinner />
      </section>
      <div className="space">      </div>
      <div className="space">      </div>
      <section id="Alcohol">
        <Alcohol />
      </section>

    </React.Fragment>
  )
}

export default Resturant
