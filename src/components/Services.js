import React, { Component } from 'react'
import Title from "./Utilities/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {

  state = {
    services: [
      {
        icons: <FaCocktail />,
        title: "Evening Dining",
        info: "In keeping with the family owned tradition of Lucia Lodge, the lodge restaurant offers true home - style cooking. Virtually all of our dressings and sauces are made from scratch on the premises.Enjoy fireside dining in our historic dining room or take in the fresh ocean air on deck.Either way, beautiful vistas of the coast accompany your meal. "
      },
      {
        icons: <FaHiking />,
        title: "Endless Hiking",
        info: "Numerous hiking trails wind through the rugged Santa Lucia Mountain range, traversing redwood canyons and sun-drenched ridges. Less strenuous but equally fun hikes can be made from well marked points of interest along the highway. Activities covered here are broken into three categories: beach access, hiking, and day trips."
      },
      {
        icons: <FaShuttleVan />,
        title: "Gift Shop",
        info: "The convenience store and gift shop is open from 8 AM to 8 PM daily in season (till 9 PM weekends). The store features deli items, beverages, select wines, grocery and camping supplies. The gift shop, located within the store, has a collection of books, cards, souvenirs and local art such as jade jewelry."
      },
      {
        icons: <FaBeer />,
        title: "Afternoon Lunch",
        info: "In keeping with the family owned tradition of Lucia Lodge, the lodge restaurant offers true home - style cooking. Virtually all of our dressings and sauces are made from scratch on the premises.Enjoy fireside dining in our historic dining room or take in the fresh ocean air on deck.Either way, beautiful vistas of the coast accompany your meal. "
      },
    ]
  }

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return <article key={index} className="service">
              <span>{item.icons}</span>
              <h6>{item.title}</h6>
              <p><i>{item.info}</i></p>
            </article>
          })}
        </div>
      </section>
    )
  }
}
