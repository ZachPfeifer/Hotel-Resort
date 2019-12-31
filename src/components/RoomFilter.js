import React from 'react'
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";


//NOTE Get all unique values (new Set())
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
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
        {/* Room Price */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            className="form-control"
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange} />
        </div>
        {/* End of Room Price */}
        {/* Room Size */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              className="size-input"
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange} />
            <input
              className="size-input"
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange} />
          </div>
        </div>
        {/* End of Room Size */}
        {/* Checkbox */}
        <div className="form-group">
          {/* Breakfast */}
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange} />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          {/* Pets */}
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange} />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* End of Checkbox */}
      </form>
    </section>
  )
}
