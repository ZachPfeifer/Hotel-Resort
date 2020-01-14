import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
// import Carousels from "../assets/Carousels";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SingleRoom extends Component {

  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = {
      payload: this.props.match.params.payload,
      defaultBcg,
      inCart: true,
      carItem: []
    }
  }

  // componentDidMount() {  }

  static contextType = RoomContext




  render() {



    const { getRoom } = this.context
    const room = getRoom(this.state.payload)
    const inCart = this.state.inCart
    // console.log(room);

    if (!room) {
      return <div className="error">
        <h3>No Such Room could be Found... </h3>
        <h3>Loading... </h3>
        <Link to='/rooms' className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    }

    //DATA
    const {
      name,
      description,
      capacity, size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room
    const [mainImg, ...defaultImg] = images
    // console.log(images);

    //SLIDER SETTINGS
    const settings = {
      className: "slide",
      dots: true,
      // lazyLoad: true,
      centerMode: true,
      infinite: true,
      arrows: true,
      centerPadding: "15px",
      slidesToShow: 2,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <StyledHero
          // @ts-ignore
          img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name}`} subtitle="">
            <Link to="/rooms" className="btn-primary">
              Back To Rooms
        </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">

          {/* FIXME CONSTRUCTION (SLIDER) */}


          <Slider {...settings}>
            {defaultImg.map((item, index) => {
              return (
                <div className="single-room-images">
                  <img key={index} src={item} alt={name} />
                </div>
              )
            })
            }
          </Slider>


          {/* FIXME END OF CONSTRUCTION */}


          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info ">
              <div className="row">
                <div className="col-md-12">
                  <h3>Info</h3>
                  <h6><strong>price:</strong> ${price}</h6>
                  <h6><strong>size:</strong> {size} ft&sup2;</h6>
                  <h6><strong>Max Capacity: </strong>{
                    capacity > 1 ? `${capacity} people` : `${capacity} person`
                  }
                  </h6>
                  <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
                  <h6>{breakfast && "free breakfast included"}</h6>
                </div>
              </div>
              {/* FIXME CONSTRUCTION (CART) */}
              <div className="row mt-5 float-right">
                <div className="col-md-5 col-sm-12">
                  {inCart === false
                    ? <button
                      className="btn-primary"
                    > Remove from Cart</button>
                    :
                    <button
                      className="btn-primary"
                    > Add to Cart</button>
                  }
                </div>
                <div className="col-md-1 col-sm-12"><br /></div>
                <div className="col-md-5 col-sm-12">
                  <a href="https://us01.iqwebbook.com/LLCA968/">
                    <button className="btn-primary"> Reserve Now!</button>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>
            })}
          </ul>
        </section>
      </>
    )
  }
}
