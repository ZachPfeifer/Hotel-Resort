import React, { Component } from 'react'

export default class Gallery extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="gallery-wrapper bg-grey">
          {/* <div className="d-flex flex-row-reverse row ">
          <div className="offset-md-8 col-md-4 offset-sm-10 col-sm-2">
            <div className="gold-text">
              <div className="gold-text">
                <h3>Come Explore Big Sur's Veiws</h3>
                <div className=" text-gold">
                  <small>
                    Numerous hiking trails wind through the rugged Santa Lucia Mountain range, traversing redwood canyons and sun-drenched ridges. Less strenuous but equally fun hikes can be made from well marked points of interest along the highway. Activities covered here are broken into three categories: beach access, hiking, and day trips.
                  </small>
                </div>
              </div>
            </div>
        </div> */}
          <div className="row">
            <div className="gallery-info d-flex flex-row-reverse ">
              <div className="offset-md-8 col-md-4 offset-sm-10 col-sm-2 m-3">
                <h1 className="text-gold text-right font-weight-bolder">Come Explore Big Sur's Veiws</h1>
                <p className="text-dark text-muted text-wrap p-2">  Numerous hiking trails wind through the rugged Santa Lucia Mountain range, traversing redwood canyons and sun-drenched ridges. Less strenuous but equally fun hikes can be made from well marked points of interest along the highway. Activities covered here are broken into three categories: beach access, hiking, and day trips.</p>
              </div>
            </div>
            <div className="gallery">
              <img src="https://images7.alphacoders.com/906/thumb-350-906177.jpg" className="img img-1"></img>
              <img src="http://www.lucialodge.com/activitiestop.jpg" className="img img-2"></img>
              <img src="https://images8.alphacoders.com/943/thumb-350-943660.jpg" className="img img-3"></img>
              <img src="https://images7.alphacoders.com/880/thumb-350-880547.jpg" className="img img-4"></img>
              <img src="https://images2.alphacoders.com/843/thumb-350-843090.jpg" className="img img-5"></img>
              <img src="https://images2.alphacoders.com/899/thumb-350-899247.jpg" className="img img-6"></img>
              <img src="http://www.lucialodge.com/activities.valley.jpg" className="img img-7"></img>
              <img src="http://www.lucialodge.com/about3.jpg" className="img img-8"></img>
              <img src="https://images6.alphacoders.com/718/thumb-350-718026.jpg" className="img img-9"></img>
              <img src="https://images3.alphacoders.com/695/thumb-350-695172.jpg" className="img img-10"></img>
              <img src="http://www.lucialodge.com/activities.camal.jpg" className="img img-11"></img>
              <img src="http://www.lucialodge.com/activities.willow.jpg" className="img img-12"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
