"use client";
import React from 'react';
import PetsDetails from '../data/PetsDetails.js';
import './../componentCss/PetCard.css';
import cat from './../assets/images/pets/meow.jpg'
import { useEffect, useState } from 'react';
import{
    APIProvider,
    Map,
    AdvancedMarker,
    useMapsLibrary,
    useMap,
} from '@vis.gl/react-google-maps'

import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api'
import { GiSkeleton } from 'react-icons/gi';

export default function PetCard() {
  // const petsArray = PetsDetails()
  const apiKeyAsString = String(process.env.REACT_APP_API_KEY);
  const position = {lat:6.975579972848102, lng:79.91551612240723}
  const position1 = {lat:8.27043731855174, lng:79.88354763525358}

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:apiKeyAsString
  })

  if(!isLoaded){
    return <h1>not loaded</h1>
  }

  console.log(process.env)

  // return (
  //   <GoogleMap center={position1} zoom={13} mapContainerStyle={{width: '100vw',height:'100vh'}}>

  //   </GoogleMap>
  // )

  return (
    <div className='petcard'>
      <div className="box">
        <span><img src={cat} alt="" /></span>
      </div>

      <div className="pet-details">

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

  // return (
  //   <APIProvider apiKey='AIzaSyCjzsoqGSNKp9IfKYsjJ2JY7CYAWmGswGQ'>
  //     <div className='map-container'>
  //       <Map 
  //         zoom={9} 
  //         center={position} >
  //       </Map>
  //     </div>
  //   </APIProvider>
  // )
}
