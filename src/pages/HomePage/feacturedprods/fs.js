import React from "react";
import Slider from "react-slick";
import "./featured_prod.css";
import { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import StarRatings from 'react-star-ratings';
import img1 from "./featuredproducts/beats_solo_2.svg";
import img2 from "./featuredproducts/H-squared.svg";
import img3 from "./featuredproducts/Netatmo_rain.svg";

export default function Fs() {
    const [items, setItems] = useState({});
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

    const sliders =() => {
        return (items.map((data) => {
            return (
                    <div className="sliderElement">
                        <div className="paddings">
                            <img src={img1} alt="items" />
                            <div className="itemDetailss">
                                <div className="item_name">
                                    {data.name}
                                </div>
                                <div className="stars">
                                    <StarRatings
                                        rating={3.5}
                                        starRatedColor="#FFD700"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="10px"
                                        starSpacing="1px"
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
            )
        }))
    }

    const sliderRef = useRef(null);
    // console.log(sliderRef.current);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("/api/products?accesories=ipad");
                setItems(res.data)
            } catch (err) { }
        };
        getProducts();
    }, [])
    console.log(items)
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
                            {sliders()}
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