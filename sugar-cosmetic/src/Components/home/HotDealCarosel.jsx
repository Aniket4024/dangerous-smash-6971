import React, { Component } from "react";
import Slider from "react-slick";

export default class UnevenSetsInfinite extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToScroll: 3,
      slidesToShow: 3
    };
    return (
      <div id="HotDealSlider">
        <Slider {...settings}>
          <div>
            <div style={{
                width:"440px",
                height:"300px",
                margin:"auto 0px",
                borderRadius:"15px",
                backgroundImage:"url(https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ffd535bbb-a35e-433c-89a7-a6b93c9a8c6c.gif&w=1920&q=75)",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
                }}>
            </div>
          </div>
          <div>
            <div style={{
                width:"440px",
                height:"300px",
                margin:"auto 0px",
                borderRadius:"15px",
                backgroundImage:"url(https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F1613c6dc-b4c1-47e1-8174-4f4e070f4e50.jpg&w=1920&q=75)",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
                }}>
            </div>
          </div>
          <div>
            <div style={{
                width:"440px",
                height:"300px",
                margin:"auto 0px",
                borderRadius:"15px",
                backgroundImage:"url(https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fb1530b24-5333-4464-9ae0-8d25c74c2637.jpg&w=1920&q=75)",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
                }}>
            </div>
          </div>
          <div>
            <div style={{
                width:"440px",
                height:"300px",
                margin:"auto 0px",
                borderRadius:"15px",
                backgroundImage:"url(https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff2ea5182-e03c-44e4-97b8-a417bc34cf13.gif&w=1920&q=75)",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
                }}>
            </div>
          </div>
          <div>
            <div style={{
                width:"440px",
                height:"300px",
                margin:"auto 0px",
                borderRadius:"15px",
                backgroundImage:"url(https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff7ab913e-22bf-4301-be48-a94da8d8c0c0.jpg&w=1920&q=75)",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
                }}>
            </div>
          </div>
          <div>
            <div style={{
                width:"450px",
                height:"300px",
                margin:"auto 0px" ,
                borderRadius:"15px",
                backgroundImage:"url(https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F3946e48e-b0c7-4e7d-a19d-0479dd685bf3.jpg&w=1920&q=75)",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
                }}>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}