import React, { Component } from "react";
import Slider from "react-slick";



export default class AutoPlayMethods extends Component{
    constructor(props) {
      super(props)
    }

    
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };
      return (
        <div id="carousel">
          <Slider id="carosuelSlider" ref={slider => (this.slider = slider)} {...settings}>
            <div>
                <img width="100%" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff4cc339d-4a3d-47f1-b4de-80f9744a69cb.jpg&w=1920&q=75" alt="slider1"/>
            </div>
            <div>
                <img width="100%" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F14bd68a6-77a3-4cac-8d80-bce249d31a01.jpg&w=1920&q=75" alt="slider2"/>
            </div>
            <div>
                <img width="100%" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fe63bbea8-d7c4-490f-be8d-16cc843b3c44.jpg&w=1920&q=75" alt="slider3"/>
            </div>
            <div>
                <img width="100%" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F0886c9f4-a521-4ff2-9ec7-6a5947860753.jpg&w=1920&q=75" alt="slider4"/>
            </div>
            <div>
                <img width="100%" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ffeb81cd7-cb89-4d40-8b45-b2f5bfe406d9.jpg&w=1920&q=75" alt="slider5"/>
            </div>
            <div>
                <img width="100%" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff3167316-1728-4c8d-8389-3e467cf033a0.jpg&w=1920&q=75" alt="slider6"/>
            </div>
            <div>
                <img width="100%" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F0745fec9-3602-4f05-9d3e-c8862788ff3d.jpg&w=1920&q=75" alt="slider7"/>
            </div>
            <div>
                <img width="100%" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F069d0c1c-f78c-4d80-94f9-e65f3bbdda73.jpg&w=1920&q=75" alt="slider8"/>
            </div>
            <div>
                <img width="100%" src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9723d8e3-9e99-459f-acfe-4ef93089e9ef.jpg&w=1920&q=75" alt="slider9"/>
            </div>
          </Slider>
        </div>
      );
    }
  }