import React, { Component } from 'react'
import Title from "./Title";
import LunchImg from "../images/lucia-images/lunch.jpg";



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
      <section className="services ">
        <article className="ml-2 mr-2 white">
          <Title title="Lunch Menu" />
          <main className=" row justify-content-center ">
            <div className="menu box col-md-5 col-sm-12 float-left ">
              <hr />
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
            <div className="offset-1 col-md-5 col-sm-12  float-right mt-5">
              <img src={LunchImg} className="img-border img-fluid rounded mb-3" alt="Lunch-Image" />
              <ul className="drinks mt-3 menu ">
                <h6 className="float-left mt-5 ml-2"><u>Beverages</u>:</h6>
                <br />
                {this.state.drinks.map((item, index) => {
                  return <li key={index} className="">
                    <br />
                    <p> {item.soda}</p>
                  </li>
                })}
                <h6 className="float-left ml-2"><u> Alcoholic Beverages</u>:</h6>
                {this.state.drinks.map((item, index) => {
                  return <li key={index} className="">
                    <p> {item.alc}</p>
                  </li>
                })}
              </ul>
            </div>
          </main>
        </article>
      </section>
    )
  }
}
