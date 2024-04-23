// "use client";
import React from 'react';
import PetsDetails from '../data/PetsDetails.js';
import './../componentCss/PetCard.css';
import cat from './../assets/images/pets/meow.jpg'
// import { useEffect, useState } from 'react';

import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api'

export default function PetCard() {
  // const petsArray = PetsDetails()
  const apiKeyAsString = String(process.env.REACT_APP_API_KEY);
  const position = {lat:6.975579972848102, lng:79.91551612240723}

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:apiKeyAsString
  })

  if(!isLoaded){
    return <h1>not loaded</h1>
  }

  return (
    <div className='petcard'>
      <div className="box">
        <span><img src={cat} alt="" /></span>
      </div>

      <div className="pet-details">
        <fieldset>
          <legend>Pet Details</legend>
          <table>
            <tr>
              <th>Type</th>
              <td><span>: </span>Cat</td>
            </tr>
            <tr>
              <th>Breed</th>
              <td><span>: </span>Persian</td>
            </tr>
            <tr>
              <th>Name</th>
              <td><span>: </span>Mee-eee-eow</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td><span>: </span>M</td>
            </tr>
            <tr>
              <th>Age</th>
              <td><span>: </span>4<span>&nbsp;Yers</span></td>
            </tr>
            <tr>
              <th>Colour</th>
              <td><span>: </span>Black, Gray & White</td>
            </tr>
            <tr>
              <th>Description</th>
              <td><span>: </span><div className='des'>Mee-eee-eow, a handsome Persian cat with striking black, gray, and white fur, exudes elegance and charm. At 4 years old, he's in his prime, showcasing a regal demeanor and a playful spirit. With his captivating gaze, he effortlessly steals hearts wherever he goes.</div></td>
            </tr>
            <tr>
              <th>Owner information</th>
              <td><span>: </span>
                <div className="info">
                  <div className="row1">
                    <div className="col1">Name</div>
                    <div className="col2">P. D. Ubeysekara</div>
                  </div>
                  <div className="row2">
                    <div className="col1">Tel. No.</div>
                    <div className="col2">+94 987 654 321</div>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </fieldset>
      </div>

      <div className="map">
        <GoogleMap 
          center={position} 
          zoom={14} 
          mapContainerStyle={{width: '540px',height:'540px'}}
          options={{
            zoomControl:false,
            streetViewControl:false,
            mapTypeControl:false,
            fullscreenControl:false
          }}
        >
          <Marker position={position} />
        </GoogleMap>
      </div>

      <div className="location-topic">
        <span>Pet Location</span>
      </div>
    </div>
  )
}
