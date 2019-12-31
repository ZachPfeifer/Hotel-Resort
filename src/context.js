import React, { Component } from 'react'
// import items from "./data";
import Client from "./Contentful";

// Client.getEntries({
//   content_type: "hotelResort"
// }).then(response => console.log(response.items)
// )

// @ts-ignore
const RoomContext = React.createContext();


class RoomProvider extends Component {

  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  }

  //getData API
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "hotelResort",
        order: "fields.price"
      })
      let rooms = this.formatData(response.items)
      // console.log(rooms);
      let featuredRooms = rooms.filter(room => room.featured === true);
      //Filter Bar
      let maxPrice = Math.max(...rooms.map(item => item.price))
      let maxSize = Math.max(...rooms.map(item => item.size))
      //Newly setState
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      })
    } catch (error) {
      console.log(error);

    }
  }

  componentDidMount() {
    this.getData()
    //SECOND ATTEMPT (cleanup) 
    // let rooms = this.formatData(items)
    // console.log(rooms);
    // let featuredRooms = rooms.filter(room => room.featured === true);
    //Filter Bar
    // let maxPrice = Math.max(...rooms.map(item => item.price))
    // let maxSize = Math.max(...rooms.map(item => item.size))
    //Newly setState
    // this.setState({
    //   rooms,
    //   featuredRooms,
    //   sortedRooms: rooms,
    //   loading: false,
    //   price: maxPrice,
    //   maxPrice,
    //   maxSize,
    // })

    //FIRST ATTEMPT:
    // let featuredRooms = rooms.filter(room => room.featuredRooms === true);
    // this.setState({
    //   rooms,
    //   featuredRooms,
    //   sortedRooms: rooms,
    //   loading: false
    // })
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url)

      let room = { ...item.fields, images, id }
      return room
    })
    return tempItems
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms]
    const room = tempRooms.find(room => room.slug === slug)
    return room
  }

  handleChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = event.target.name

    this.setState({
      [name]: value,

    }, this.filterRooms)

    console.clear()
    // console.log(`this is name: ${name},value: ${value}`);
  }

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      // maxPrice,
      // minPrice,
      maxSize,
      minSize,
      breakfast,
      pets
    } = this.state
    //All the rooms
    let tempRooms = [...rooms]
    //Transforms values in state
    capacity = parseInt(capacity)
    price = parseInt(price)

    //Filter By Type
    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type)
    }
    //Filter by Capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    }
    //Filter by Price
    tempRooms = tempRooms.filter(room => room.price <= price)
    //Filter by Size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
    //Filter by Breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true)
    }
    //Filter by Pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true)
    }
    //Change State
    this.setState({
      sortedRooms: tempRooms
    })

    // console.log('Hello from filterRooms');
  }


  render() {
    return (
      <RoomContext.Provider value={{
        ...this.state,
        getRoom: this.getRoom,
        handleChange: this.handleChange
      }}>
        {this.props.children}
      </RoomContext.Provider>

    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      < RoomConsumer >
        {value => <Component{...props} context={value} />}
      </RoomConsumer>
    )
  }
}

export { RoomProvider, RoomConsumer, RoomContext }