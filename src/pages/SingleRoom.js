import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

export default class SingleRoom extends Component {

  constructor(props) {
    super(props)
    // console.log(this.props);
    this.state = {
      payload: this.props.match.params.payload,
      defaultBcg
    }
  }

  // componentDidMount() {  }

  static contextType = RoomContext

  render() {
    const { getRoom } = this.context
    const room = getRoom(this.state.payload)
    console.log(room);

    if (!room) {
      return <div className="error">
        <h3>No Such Room could be Found... </h3>
        {/* <h3>Loading... </h3> */}
        <Link to='/rooms' className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    }


    const {
      name,
      description,
      capacity, size,
      price,
      extra,
      breakfast,
      pets,
      images
    } = room
    return <Hero hero="roomsHero">
      <Banner title={`${name} room`}>
        <Link to="/rooms" className="btn-primary">
          Back To Rooms
        </Link>
      </Banner>
    </Hero>
  }
}
