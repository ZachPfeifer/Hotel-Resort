import React, { Component } from 'react'
// import Title from "./Title";
// import LunchImg from "../images/lucia-images/lunch.jpg";
import Banner from './Utilities/Banner';
import LunchIMG from "../images/lucia-images/lunch1.jpg";



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
      <section className="lunch">
        <div className=" lunch-bg parallax mx-auto">
          <div className="container mt-5  d-flex justify-content-center">
            <div className="row">
              <div className="col-12">
                <Banner title="Lunch Menu" subtitle="Dine on our Open Padio " children="" />
              </div>
            </div>
          </div>
          <div className="container-fluid over-flow">
            <div className="row m-5 bg-grey ">
              <div className="col-lg-6 col-sm-12">
                <h3 className="text-gold m-2 pb-1"><i> Entrees:  </i></h3>
                {this.state.menu.map((item, index) => {
                  return <div key={index} className="price-wrap ml-3">
                    <h5 className="price-header float-left mr-3 text-gold">{item.title}
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
                <div className="image-container mt-5 rounded pt-5 pr-5 offset-lg-2 col-lg-10">
                  <img src={LunchIMG} alt="Entree Image" className="img-border img-fluid rounded mb-3 p-1" />
                </div>
                <h4 className="text-gold m-2 pb-1"><i>Beverages:</i></h4>
                {this.state.drinks.map((item, index) => {
                  return <div key={index} className="mx-auto">
                    <p className="ml-5"> {item.soda}</p>
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
















//SECTION OLD STUFF
// import React, { Component } from 'react'
// import Title from "./Title";
// import LunchImg from "../images/lucia-images/lunch.jpg";



// export default class Lunch extends Component {

//   state = {
//     menu: [
//       {
//         title: "Fried Chick",
//         disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
//         price: "$17.00"
//       },
//       {
//         title: "Lucia Burger",
//         disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
//         price: "$17.00"
//       }, {
//         title: "Black & Bleu Burger",
//         disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
//         price: "$17.00"
//       }, {
//         title: "California",
//         disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
//         price: "$17.00"
//       }, {
//         title: "Veggie",
//         disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
//         price: "$15.00"
//       }, {
//         title: "BLTA",
//         disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
//         price: "$17.00"
//       },
//       {
//         title: "Fish & Chips",
//         disc: "Fried Chicken Sandwitch with pickles, coldslaw, and buffalo sauce with a side of fries",
//         price: "$18.00"
//       },
//     ],
//     drinks: [
//       {
//         soda: "Coca-Cola, Sprite, Dr Pepper, Sprite, Diet Coke"
//       },
//       {
//         alc: "Pasifico"
//       }
//     ]
//   }

//   render() {
//     return (
//       <section className="services ">
//         <article className="ml-2 mr-2 white">
//           <Title title="Lunch Menu" />
//           <main className=" row justify-content-center ">
//             <div className="menu box col-md-5 col-sm-12 float-left ">
//               <hr />
//               {this.state.menu.map((item, index) => {
//                 return <div key={index} className="price-wrap ml-3">
//                   <h5 className="price-header float-left mr-3">{item.title}
//                   </h5>
//                   <div className="price-dots">
//                     <span className="separator-dots"></span>
//                   </div>
//                   <p className="price-price"><small><i>{item.price}</i></small></p>
//                   <p><i>{item.disc}</i></p>
//                   <hr />
//                 </div>
//               })}
//             </div>
//             <div className="offset-1 col-md-5 col-sm-12  float-right mt-5">
//               <img src={LunchImg} className="img-border img-fluid rounded mb-3" alt="Lunch-Image" />
//               <ul className="drinks mt-3 menu ">
//                 <h6 className="float-left mt-5 ml-2"><u>Beverages</u>:</h6>
//                 <br />
//                 {this.state.drinks.map((item, index) => {
//                   return <li key={index} className="">
//                     <br />
//                     <p> {item.soda}</p>
//                   </li>
//                 })}
//                 <h6 className="float-left ml-2"><u> Alcoholic Beverages</u>:</h6>
//                 {this.state.drinks.map((item, index) => {
//                   return <li key={index} className="">
//                     <p> {item.alc}</p>
//                   </li>
//                 })}
//               </ul>
//             </div>
//           </main>
//         </article>
//       </section>
//     )
//   }
// }
