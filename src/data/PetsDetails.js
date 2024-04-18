import React, { memo } from 'react'
import dog from './../assets/images/pets/doggy.jpg'
import cat from './../assets/images/pets/meow.jpg'


export default function PetsDetails() {

  const petsArray = [
    {
        id: 1,
        type: 'Dog',
        name: 'Doggy',
        age: 10,
        photo: dog,
        location: ['','']
    },
    {
        id: 2,
        type: 'Cat',
        name: 'Meow',
        age: 10,
        photo: cat,
        location: ['','']
    },
]

  return (
    petsArray
  )
}
