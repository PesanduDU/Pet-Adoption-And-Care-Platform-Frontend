import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import LastFooter from '../components/LastFooter'
import FirstFooter from '../components/FirstFooter'
import PetTalk from '../components/PetTalk'

export default function Home() {
  return (
    <div>
        <Header/>
        <Carousel/>
        <PetTalk/>
        <LastFooter/>
        <FirstFooter/>
    </div>
  )
}
