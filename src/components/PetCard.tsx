import React from 'react'
import PetsDetails from '../data/PetsDetails.js'
import './../componentCss/PetCard.css'
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

  return (
    <div className='petcard'>
        <div className="box">
            <span><img src={cat} alt="" /></span>
        </div>

        <div className="pet-details">

        </div>

        <div className="map">

        </div>
    </div>
  )
}
