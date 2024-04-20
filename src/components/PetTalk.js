import React from 'react'
import './../componentCss/PetTalk.css'
import shape1 from './../assets/pettalk/shapes/shape1.png'
import shape2 from './../assets/pettalk/shapes/shape2.png'
import dog1 from './../assets/pettalk/petImages/dogImage1.png'
import dog2 from './../assets/pettalk/petImages/dogImage2.png'
import dog3 from './../assets/pettalk/petImages/dogImage3.png'
import cat1 from './../assets/pettalk/petImages/cat1.png'
import cat2 from './../assets/pettalk/petImages/cat2.png'
import cat3 from './../assets/pettalk/petImages/cat3.png'
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
        <img src={shape2} alt="" className='shape2' />
        <img src={cat1} alt="" className='cat1'/>
        <img src={cat2} alt="" className='cat2'/>
        <div className="para3">
            <p>
            When I look into the eyes of an animal, I do not see an animal. I see a living being. I see a friend. And, I feel a soul.
            </p>
            <h3> – Wallace Sife</h3>
        </div>
        <div className="para4">
            <p>
            "Pets are humanizing. They remind us we have an obligation and responsibility to preserve and nurture and care for all life."</p>
            <h3> – James Cromwell</h3>
        </div>
        <img src={cat3} alt="" className='cat3'/>
        <img src={dog3} alt="" className='dog3'/>
        <div className="para5">
            <p>
            “When animals express their feelings they pour out like water from a spout. Animals’ emotions are raw, unfiltered, and uncontrolled. Their joy is the purest and most contagious of joys and their grief the deepest and most devastating. Their passions bring us to our knees in delight and sorrow”.
            </p>
            <h3> – Marc Bekoff</h3>
        </div>
    </div>
  )
}
