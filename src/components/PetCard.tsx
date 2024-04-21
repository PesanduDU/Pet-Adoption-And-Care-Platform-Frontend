import React from 'react';
import PetsDetails from '../data/PetsDetails.js';
import './../componentCss/PetCard.css';
import cat from './../assets/images/pets/meow.jpg'


import { useEffect, useState } from 'react';
import{
    APIProvider,
    Map,
    useMapsLibrary,
    useMap,
} from '@vis.gl/react-google-maps'

export default function PetCard() {
  const petsArray = PetsDetails()
  const apiKeyAsString = String(process.env.REACT_APP_API_KEY);

  console.log(process.env)

  return (
    <div className='petcard'>
      <div className="box">
        <span><img src={cat} alt="" /></span>
      </div>

      <div className="pet-details">

      </div>

      <div className="map">
        <APIProvider apiKey={apiKeyAsString}>

        </APIProvider>
      </div>
    </div>
  )
}
