import React from 'react'
import Header from '../components/Header'
import SignUp from '../components/SignUp'
import LastFooter from '../components/LastFooter'
import FirstFooter from '../components/FirstFooter'
import ContactUs from '../components/ContactUs.js'

function UserLogIn() {
  return (
    <>
        <Header/>
        <SignUp/>
        {/* <ContactUs/> */}
        <LastFooter/>
        <FirstFooter/>
    </>
  )
}

export default UserLogIn