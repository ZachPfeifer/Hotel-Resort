import React, { Component } from 'react'
import Title from "../Utilities/Title";
import { GiWineBottle, GiFoodChain, } from "react-icons/gi";

export default class DinningOptions extends Component {

  state = {
    services: [
      {
        icons: <GiFoodChain />,
        title: "Lunch",
        hours: "11:00 AM and 4:30 PM",
        disclaimer: "(Varies by season. Please call)",
        info: "In keeping with the family owned tradition of Lucia Lodge, the lodge restaurant offers true home - style cooking. Virtually all of our dressings and sauces are made from scratch on the premises.Enjoy fireside dining in our historic dining room or take in the fresh ocean air on deck.Either way, beautiful vistas of the coast accompany your meal."
      },
      {
        icons: <GiWineBottle />,
        title: "Dinner",
        hours: " 5:00 PM to 8:00 PM",
        disclaimer: "(Varies by season. Please call)",
        info: "In keeping with the family owned tradition of Lucia Lodge, the lodge restaurant offers true home - style cooking. Virtually all of our dressings and sauces are made from scratch on the premises.Enjoy fireside dining in our historic dining room or take in the fresh ocean air on deck.Either way, beautiful vistas of the coast accompany your meal. "
      },
    ]
  }

  render() {
    return (
      <section className="services">
        <Title title="Come Dine With Us" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="service">
              <span>{item.icons}</span>
              <h6>{item.title}</h6>
              <p><small>
                {item.hours}
                <br />
                {item.disclaimer}
                <br />
              </small></p>
              <p><i><br /> {item.info}</i></p>
            </article>
          })}
        </div>
      </section>
    )
  }
}
