import React from 'react'
import './../componentCss/PetTalk.css'
import shape1 from './../assets/pettalk/shapes/shape1.png'
import dog1 from './../assets/pettalk/petImages/dogImage1.png'
import dog2 from './../assets/pettalk/petImages/dogImage2.png'
import { RiDoubleQuotesL } from "react-icons/ri";

export default function PetTalk() {
  return (
    <div className="pettalk">
        <span><RiDoubleQuotesL className='quote1' /><h1>Pet </h1> <h2>Talks ...</h2></span>
        <img src={shape1} alt="" className='shape1' />
        <img src={dog1} alt="" className='dog1' />
        <div className="para1">
            <p>
            “Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day. It is amazing how much love and laughter they bring into our lives and even how much closer we become with each other because of them.”
            </p>
            <h3> – John Grogan</h3>
        </div>
        <img src={dog2} alt="" className='dog2' />
        <div className="para2">
            <p>
            If you accept that pets can love us as much as we do them, then the logic is clear and cannot be denied. If you believe that there is a heaven for people, then they must be there, waiting for us, when we cross over. Heaven is love, and pets always share that with us.
            </p>
            <h3> – Wallace Sife</h3>
        </div>
    </div>
  )
}
