import React, { Component } from "react";
import "./featured_prod.css";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import img1 from "./featuredproducts/beats_solo_2.svg";
import img2 from "./featuredproducts/beats_solo_2.svg";
import img3 from "./featuredproducts/beats_solo_2.svg";

//json
// import data from "../../jsondata/homepage/featured_prod.json";

export default function Feactured (props) {
 
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <Slider {...settings}>
          <div>
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
                    size={20}
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
      </>
    );
  
}

/**
 * <div className="sliderElement">
              <img src={data.image} alt="items" />
              <div className="itemDetailss">
                <div className="item_name">Beats Solo 2 On Ear Headphones - Black</div>
                <div className="stars">
                  <ReactStars count={5} value={4} edit={false} size={20} activeColor="#ffd700" />
                </div>
                <div className="item_prices">
                  <span style={{ marginRight: "10px", color: "red" }}>
                    499
                  </span>
                  <span style={{ color: "#999999" }}>
                    <del>699</del>
                  </span>
                </div>
              </div>
            </div>
 */

// function App() {
//  const data = [
//     {
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
//       caption: `<div>
//                   San Francisco
//                   <br/>
//                   Next line
//                 </div>`
//     },
//     {
//       image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
//       caption: "Scotland"
//     },
//     {
//       image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
//       caption: "Darjeeling"
//     },
//     {
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
//       caption: "San Francisco"
//     },
//     {
//       image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
//       caption: "Scotland"
//     },
//     {
//       image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
//       caption: "Darjeeling"
//     },
//     {
//       image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
//       caption: "San Francisco"
//     },
//     {
//       image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
//       caption: "Scotland"
//     },
//     {
//       image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
//       caption: "Darjeeling"
//     }
//   ];

//   const captionStyle = {
//     fontSize: '2em',
//     fontWeight: 'bold',
//   }
//   const slideNumberStyle = {
//     fontSize: '20px',
//     fontWeight: 'bold',
//   }
//   return (
//     <div className="App">
//       <div style={{ textAlign: "center" }}>
//         <div style={{
//           padding: "0 20px"
//         }}>
//           <Carousel
//             data={data}
//             // time={2000}
//             width="300px"
//             height="300px"
//             captionStyle={captionStyle}
//             radius="10px"
//             slideNumber={true}
//             slideNumberStyle={slideNumberStyle}
//             captionPosition="bottom"
//             automatic={true}
//             dots={true}
//             pauseIconColor="white"
//             pauseIconSize="40px"
//             slideBackgroundColor="darkgrey"
//             slideImageFit="cover"
//             thumbnails={true}
//             thumbnailWidth="100px"
//             style={{
//               textAlign: "center",
//               maxWidth: "850px",
//               maxHeight: "500px",
//               margin: "40px auto",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
