import React from 'react'
import Header from '../components/Header'
import PetCard from '../components/PetCard.tsx'
import FirstFooter from '../components/FirstFooter'
import LastFooter from '../components/LastFooter'

function PetMoreDetailsPage() {
  return (
    <>
      <Header/>
      <PetCard/>
      <LastFooter/>
      <FirstFooter/>
    </>
  )
}

export default PetMoreDetailsPage