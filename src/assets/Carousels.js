import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const photo = [
  {
    name: 'Photo1',
    url: "http://images.ctfassets.net/4ak2gm9gv3p8/7kSdPzh1S2HjsXmQxlHQ5p/b8fadc18aa03a8d9edb13db0e10a1239/HoneyMoonBed.jpg"
  },
  {
    name: 'Photo1',
    url: "http://images.ctfassets.net/4ak2gm9gv3p8/7kSdPzh1S2HjsXmQxlHQ5p/b8fadc18aa03a8d9edb13db0e10a1239/HoneyMoonBed.jpg"
  },
]

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      arrows: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          {photo.map((photo) => {
            return (
              <img src={photo.url} alt={photo.name} />
            )
          })}
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}