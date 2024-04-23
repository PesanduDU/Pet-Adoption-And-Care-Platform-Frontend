import React from 'react'
import './../componentCss/Carousel_Items.css'
import { Link } from 'react-router-dom'

export default function Carousel_Items({img}) {
    return (
        <div className="carousel-list-item">
            <img src={img} alt="" />
            <div className="carousel-content">
                <div className="carousel-author">Pet Care Platform</div>
                <div className="carousel-title">All Ways For You</div>
                <div className="carousel-topic">Dogs and Cats</div>
                <div className="carousel-des">
                    Our platform is a one-stop destination for pet lovers looking to adopt their newest furry friend and provide them with the utmost care. We connect prospective pet parents with shelters and rescues, making the adoption process seamless and joyful. Additionally, our site offers valuable resources, from expert tips on pet care to community forums where users can share experiences and seek advice. With our user-friendly interface and commitment to animal welfare, we're dedicated to creating loving homes for pets in need.
                </div>
                <div className="carousel-button">
                    {/* <button>SEE MORE</button>
                    <button>GALLERY</button> */}
                </div>
            </div>
        </div>
    )
}
