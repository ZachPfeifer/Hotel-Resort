import React, { Component } from 'react'
import Title from "./Title";
import LunchImg from "../images/lucia-images/lunch.jpg";
import Banner from './Utilities/Banner';



export default class Lunch extends Component {

  state = {
    menu: [
      {
        title: "Fried Chick",
        disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
        price: "$17.00"
      },
      {
        title: "Lucia Burger",
        disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
        price: "$17.00"
      }, {
        title: "Black & Bleu Burger",
        disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
        price: "$17.00"
      }, {
        title: "California",
        disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
        price: "$17.00"
      }, {
        title: "Veggie",
        disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
        price: "$15.00"
      }, {
        title: "BLTA",
        disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
        price: "$17.00"
      },
      {
        title: "Fish & Chips",
        disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
        price: "$18.00"
      },
    ],
    drinks: [
      {
        soda: "Coca-Cola, Sprite, Dr Pepper, Sprite, Diet Coke"
      },
      {
        alc: "Pasifico"
      }
    ]
  }

  render() {
    return (
      <section className="dinner">
        <div className=" dinner-bg parallax mx-auto">
          <div className="container mt-5  d-flex justify-content-center">
            <div className="row">
              <div className="col-12">
                <Banner title="Dinner Menu" subtitle="Dine with an Ocean View" children="" />
              </div>
            </div>
          </div>
          <div className="container-fluid over-flow">
            <div className="row m-5 bg-grey ">
              <div className="col-lg-6 col-sm-12">
                <h4><i> Entrees:  </i></h4>
                {this.state.menu.map((item, index) => {
                  return <div key={index} className="price-wrap ml-3">
                    <h5 className="price-header float-left mr-3">{item.title}
                    </h5>
                    <div className="price-dots">
                      <span className="separator-dots"></span>
                    </div>
                    <p className="price-price"><small><i>{item.price}</i></small></p>
                    <p><i>{item.disc}</i></p>
                    <hr />
                  </div>
                })}
              </div>
              <div className="col-lg-6 col-sm-12">
                <h4><i>Beverages:</i></h4>
                {this.state.drinks.map((item, index) => {
                  return <div key={index} className="">
                    <p> {item.soda}</p>
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
