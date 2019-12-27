import React, { Component } from 'react'
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {

  state = {
    services: [
      {
        icons: <FaCocktail />,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem dolorem eius id excepturi possimus temporibus veritatis perferendis sint eveniet quo veniam aperiam laboriosam nesciunt provident et hic, quas ipsum."
      },
      {
        icons: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem dolorem eius id excepturi possimus temporibus veritatis perferendis sint eveniet quo veniam aperiam laboriosam nesciunt provident et hic, quas ipsum."
      },
      {
        icons: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem dolorem eius id excepturi possimus temporibus veritatis perferendis sint eveniet quo veniam aperiam laboriosam nesciunt provident et hic, quas ipsum."
      },
      {
        icons: <FaBeer />,
        title: "Beer on the Beach",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore autem dolorem eius id excepturi possimus temporibus veritatis perferendis sint eveniet quo veniam aperiam laboriosam nesciunt provident et hic, quas ipsum."
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
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    )
  }
}
