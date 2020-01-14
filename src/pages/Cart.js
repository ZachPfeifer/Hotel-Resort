import React, { Component } from 'react'
import Basket from "../components/Basket";
import { RoomContext } from '../context';
// import Client from "../Contentful";


export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      inCart: false
    };
  }

  static contextType = RoomContext
  // componentWillMount() {
  // }




  handleRemoveFromCart = (e, room) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== room.id);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    })
  }
  handleAddToCart = (e, room) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let roomAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === room.id) {
          cp.count += 1;
          roomAlreadyInCart = true;
        }
      });

      if (!roomAlreadyInCart) {
        cartItems.push({ ...room, count: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  }



  render() {

    console.log();


    return (
      <div className="container">
        <h1>Current Items in Cart:</h1>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
          </div>

        </div>

      </div>
    );
  }
}