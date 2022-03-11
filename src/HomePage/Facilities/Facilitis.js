import "./Facilitis.css";

import React from 'react';

export default function Facilitis(props) {
  console.log(props);
  console.log(props.fascilitie.image)
  return (
    // <div className="Facilitis">
        <div className="subFacilities">
            <img src="{props.fascilitie.image}" alt=""/>
            <h4 className="facilityName">{props.fascilitie.title}</h4>
            <div className="decription">{props.fascilitie.description}</div>
        </div>
        /* <div className="subFacilities">
            <img />
            <div className="facilityName"></div>
            <div className="decription"></div>
        </div>
        <div className="subFacilities">
            <img />
            <div className="facilityName"></div>
            <div className="decription"></div>
        </div> */
    // </div>
  )
}
