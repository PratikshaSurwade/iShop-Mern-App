import React from "react";
// import { Carousel } from 'react-carousel-minimal';
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import "./../HomePage/home.css";
import { useRef } from "react";
const Trial=()=> {
    const sliderRef = useRef(null);
    // console.log(sliderRef.current);
  return (
      <>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <h1>trial</h1>
    <div className="arrowwss"> 
    <i style={{margin:"1rem",cursor:"pointer"}} class="arrows fa-solid fa-angle-left" onClick={()=>sliderRef.current.slickPrev()}></i>
    <i style={{margin:"1rem",cursor:"pointer"}} class="arrows fa-solid fa-angle-right" onClick={()=>sliderRef.current.slickNext()}></i>
</div>
    </div>
   
    <Slider 
        ref={sliderRef}
        slidesToShow={3}
        slidesToScroll={3}
    >
        {
            Array(10).fill("").map(()=>(
                <div  style={{width:"5rem",height:"5rem"}} >
                    <img style={{borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiX4w6Mt5J4EgszSpT2UsbSd7eMrL9bEumPw&usqp=CAU" alt="alternte" />
                </div>
            ))
        }
    </Slider>
    
    </>
  )
}

export default Trial;
/*{
            Array(10).fill("").map(()=>(
                <div  style={{width:"5rem",height:"5rem"}} >
                <img style={{borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiX4w6Mt5J4EgszSpT2UsbSd7eMrL9bEumPw&usqp=CAU" alt="alternte" />
                </div>
            ))
        } */