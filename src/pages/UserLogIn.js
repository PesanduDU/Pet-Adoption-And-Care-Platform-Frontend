import React from 'react'
import Header from '../components/Header'

import LastFooter from '../components/LastFooter'
import FirstFooter from '../components/FirstFooter'
import ContactUs from '../components/ContactUs.js'
// import Signup from '../components/SignUp.jsx'
import Register from '../components/RegistrationForm.js'
// import SignUp from './../components/Signup.jsx'

function UserLogIn() {
  return (
    <>
        <Header/>
        <Register/>
        {/* <ContactUs/> */}
        <LastFooter/>
        <FirstFooter/>
        
    </>
  )
}

export default UserLogIn