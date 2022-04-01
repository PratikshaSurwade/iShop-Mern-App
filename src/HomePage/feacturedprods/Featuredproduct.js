import React from "react";
import Slider from "react-slick";
import "./featured_prod.css";
import { useRef } from "react";

import ReactStars from "react-rating-stars-component";
import img1 from "./featuredproducts/beats_solo_2.svg";
import img2 from "./featuredproducts/H-squared.svg";
import img3 from "./featuredproducts/Netatmo_rain.svg";

export default function Featuredproduct() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000, // tablet breakpoint
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
      },
      {
          breakpoint: 1250, // tablet breakpoint
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 768, // mobile breakpoint
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 576, // mobile breakpoint
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 381, // mobile breakpoint
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 200, // mobile breakpoint
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
  };
  const sliderRef = useRef(null);
  console.log(sliderRef.current);
  return (
    <div className="itemContain">
      <div className="sliderContainer">
      <i
            style={{ margin: "1rem", cursor: "pointer" }}
            class="arrows fa-solid fa-angle-left"
            onClick={() => sliderRef.current.slickPrev()}
          ></i>
        <div className="sliderContainerrr">
         
          <Slider ref={sliderRef} {...settings}>
            <div className="paddings">
              <div className="sliderElement">
                <img src={img1} alt="items" />
                <div className="itemDetailss">
                  <div className="item_name">
                    Beats Solo 2 On Ear Headphones - Black
                  </div>
                  <div className="stars">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                    />
                  </div>
                  <div className="item_prices">
                    <span style={{ marginRight: "10px", color: "red" }}>
                      $499
                    </span>
                    <span style={{ color: "#999999" }}>
                      <del>$699</del>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="paddings">
              <div className="sliderElement">
                <img src={img2} alt="items" />
                <div className="itemDetailss">
                  <div className="item_name">H-Squared tvTray</div>
                  <div className="stars">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      // size={20}
                      activeColor="#ffd700"
                      responsive={ [
                        {
                          breakpoint:998, // tablet breakpoint
                          settings: {
                              size:15
                          }
                        },
                        {
                          breakpoint:556, // tablet breakpoint
                          settings: {
                              size:20
                          }
                        },
                        {
                          breakpoint:200, // tablet breakpoint
                          settings: {
                              size:10
                          }
                        }
                      ]}
                    />
                  </div>
                  <div className="item_prices">
                    <span style={{ marginRight: "10px", color: "red" }}>
                      $499
                    </span>
                    <span style={{ color: "#999999" }}>
                      <del>$699</del>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="paddings">
              <div className="sliderElement">
                <img src={img3} alt="items" />
                <div className="itemDetailss">
                  <div className="item_name">Netatmo Rain Gauge</div>
                  <div className="stars">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      // size={20}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="item_prices">
                    <span style={{ marginRight: "10px", color: "red" }}>
                      $499
                    </span>
                    <span style={{ color: "#999999" }}>
                      <del>$699</del>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="paddings">
              <div className="sliderElement">
                <img src={img1} alt="items" />
                <div className="itemDetailss">
                  <div className="item_name">
                    Beats Solo 2 On Ear Headphones - Black
                  </div>
                  <div className="stars">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      // size={20}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="item_prices">
                    <span style={{ marginRight: "10px", color: "red" }}>
                      $499
                    </span>
                    <span style={{ color: "#999999" }}>
                      <del>$699</del>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="paddings">
              <div className="sliderElement">
                <img src={img2} alt="items" />
                <div className="itemDetailss">
                  <div className="item_name">H-Squared tvTray</div>
                  <div className="stars">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      // size={20}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="item_prices">
                    <span style={{ marginRight: "10px", color: "red" }}>
                      $499
                    </span>
                    <span style={{ color: "#999999" }}>
                      <del>$699</del>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="paddings">
              <div className="sliderElement">
                <img src={img3} alt="items" />
                <div className="itemDetailss">
                  <div className="item_name">Netatmo Rain Gauge</div>
                  <div className="stars">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      // size={20}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="item_prices">
                    <span style={{ marginRight: "10px", color: "red" }}>
                      $499
                    </span>
                    <span style={{ color: "#999999" }}>
                      <del>$699</del>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="paddings">
              <div className="sliderElement">
                <img src={img1} alt="items" />
                <div className="itemDetailss">
                  <div className="item_name">
                    Beats Solo 2 On Ear Headphones - Black
                  </div>
                  <div className="stars">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      // size={20}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="item_prices">
                    <span style={{ marginRight: "10px", color: "red" }}>
                      $499
                    </span>
                    <span style={{ color: "#999999" }}>
                      <del>$699</del>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="paddings">
              <div className="sliderElement">
                <img src={img2} alt="items" />
                <div className="itemDetailss">
                  <div className="item_name">H-Squared tvTray</div>
                  <div className="stars">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      // size={20}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="item_prices">
                    <span style={{ marginRight: "10px", color: "red" }}>
                      $499
                    </span>
                    <span style={{ color: "#999999" }}>
                      <del>$699</del>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="paddings">
              <div className="sliderElement">
                <img src={img3} alt="items" />
                <div className="itemDetailss">
                  <div className="item_name">Netatmo Rain Gauge</div>
                  <div className="stars">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={true}
                      // size={20}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="item_prices">
                    <span style={{ marginRight: "10px", color: "red" }}>
                      $499
                    </span>
                    <span style={{ color: "#999999" }}>
                      <del>$699</del>
                    </span>
                  </div>
                </div>
              </div>
            </div>
           
          </Slider>
          
        </div>
        <i
            style={{ margin: "1rem", cursor: "pointer" }}
            class="arrows fa-solid fa-angle-right"
            onClick={() => sliderRef.current.slickNext()}
          ></i>
      </div>
    </div>
  );
}
