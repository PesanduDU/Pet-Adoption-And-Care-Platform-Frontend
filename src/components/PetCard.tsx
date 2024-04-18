import React from 'react'
import PetsDetails from '../data/PetsDetails.js'

export default function PetCard() {

 const petsArray = PetsDetails()

  return (
    <div>
        {petsArray.map(pet => (
            <div key={pet.id}>
            <h2>{pet.name}</h2>
                <p>Type: {pet.type}</p>
                <p>Age: {pet.age}</p>
                {/* Render other pet details here */}
                <img src={pet.photo} alt={pet.name} />
          </div>
        ))}
    </div>
  )
}
