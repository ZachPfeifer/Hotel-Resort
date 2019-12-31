import React from 'react'
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";


//NOTE Get all unique values (new Set())
const getUnique = (items, value) => {
  return [... new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext)
  // console.log(context);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context

  //get unique types
  let types = getUnique(rooms, 'type')
  //add all unique types
  types = ['all', ...types]
  //map to jsx
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  let guests = getUnique(rooms, 'capacity')
  guests = guests.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            className="form-control"
            name="type" id="type"
            value={type}
            onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* select Guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            className="form-control"
            name="capacity" id="capacity"
            value={capacity}
            onChange={handleChange}>
            {guests}
          </select>
        </div>
        {/* end of select Guest */}
      </form>
    </section>
  )
}
