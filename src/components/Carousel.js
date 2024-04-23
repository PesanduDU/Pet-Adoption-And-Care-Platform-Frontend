import React, {useEffect} from 'react'
import Carousel_Items from './Carousel_Items'
import './../components/Carousel_Items'
import './../componentCss/Carousel.css'
import './../componentCss/Carousel_Items.css'
import img1 from './../assets/images/img1.jpg'
import img2 from './../assets/images/img2.jpg'
import img3 from './../assets/images/img3.jpg'
import img4 from './../assets/images/img4.jpg'

// const nextDom = document.getElementById('next');
// const prevDom = document.getElementById('prev');
// const carouselDom = document.querySelector('.carousel');
// const listItemDom = document.querySelector('.carousel-list');
// const thumbnailDom = document.querySelector('.thumbnail');

// nextDom.onclick = function(){
//     showSlider('next');
// }

// prevDom.onclick = function(){
//     showSlider('prev');
// }

// const timeRunning = 3000
// const timeAutoNext = 7000
// let runTimeOut
// let runAutoRun

// function showSlider(type){
//     const itemSlider = document.querySelectorAll('.carousel-list-item');
//     const itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

//     if(type === 'next'){
//         listItemDom.appendChild(itemSlider[0]);
//         thumbnailDom.appendChild(itemThumbnail[0]);
//         carouselDom.classList.add('next');
//     }
//     else{
//         // const positionLastItem = itemSlider.length-1;
//         const lastItem = itemSlider[itemSlider.length - 1];
//         const lastThumbnail = itemThumbnail[itemThumbnail.length - 1];
//         // listItemDom.prepend(itemSlider[positionLastItem]);
//         listItemDom.prepend(lastItem);
//         // itemThumbnail.prepend(itemThumbnail[positionLastItem]);
//         thumbnailDom.prepend(lastThumbnail);
//         carouselDom.classList.add('prev');
//     }

//     clearTimeout(runTimeOut)
//     runTimeOut = setTimeout(() => {
//         carouselDom.classList.remove('next');
//         carouselDom.classList.remove('prev');
//     }, timeRunning)

//     clearTimeout(runAutoRun)
//     runAutoRun = setTimeout(() => {
//         nextDom.click();
//     }, timeAutoNext)
// }

export default function Carousel() {

    // useEffect(() => {
    //     const nextDom = document.getElementById('next');
    //     const prevDom = document.getElementById('prev');
    //     const carouselDom = document.querySelector('.carousel');
    //     const listItemDom = document.querySelector('.carousel-list');
    //     const thumbnailDom = document.querySelector('.thumbnail');

    //     const timeRunning = 3000
    //     const timeAutoNext = 7000
    //     let runTimeOut
    //     let runAutoRun = setTimeout(() => {
    //         nextDom.click();
    //     }, timeAutoNext)

    //     const showSlider = (type) => {
    //         // Your showSlider function logic here
    //         const itemSlider = document.querySelectorAll('.carousel-list-item');
    //         const itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
        
    //         if(type === 'next'){
    //             listItemDom.appendChild(itemSlider[0]);
    //             thumbnailDom.appendChild(itemThumbnail[0]);
    //             carouselDom.classList.add('next');
    //         }
    //         else{
    //             // const positionLastItem = itemSlider.length-1;
    //             const lastItem = itemSlider[itemSlider.length - 1];
    //             const lastThumbnail = itemThumbnail[itemThumbnail.length - 1];
    //             // listItemDom.prepend(itemSlider[positionLastItem]);
    //             listItemDom.prepend(lastItem);
    //             // itemThumbnail.prepend(itemThumbnail[positionLastItem]);
    //             thumbnailDom.prepend(lastThumbnail);
    //             carouselDom.classList.add('prev');
    //         }
        
    //         clearTimeout(runTimeOut)
    //         runTimeOut = setTimeout(() => {
    //             carouselDom.classList.remove('next');
    //             carouselDom.classList.remove('prev');
    //         }, timeRunning)
        
    //         clearTimeout(runAutoRun)
    //         runAutoRun = setTimeout(() => {
    //             nextDom.click();
    //         }, timeAutoNext)
    //     };

    //     nextDom.addEventListener('click', () => showSlider('next'));
    //     prevDom.addEventListener('click', () => showSlider('prev'));

    //     return () => {
    //         // Clean up event listeners when component unmounts
    //         nextDom.removeEventListener('click', () => showSlider('next'));
    //         prevDom.removeEventListener('click', () => showSlider('prev'));
    //     };
    // }, []);

    useEffect(() => {
        const nextDom = document.getElementById('next');
        const prevDom = document.getElementById('prev');
        const carouselDom = document.querySelector('.carousel');
        // const listItemDom = document.querySelector('.carousel-list');
        // const thumbnailDom = document.querySelector('.thumbnail');

        nextDom.onclick = function(){
            showSlider('next');
        }

        prevDom.onclick = function(){
            showSlider('prev');
        }

        const timeRunning = 3000
        const timeAutoNext = 7000
        let runTimeOut
        let runAutoRun = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext)

        function showSlider(type){
            const listItemDom = document.querySelector('.carousel-list');
            const thumbnailDom = document.querySelector('.thumbnail');
            const itemSlider = document.querySelectorAll('.carousel-list-item');
            const itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
            const firstItem = itemSlider[0];
            const firstThumnail = itemThumbnail[0];

            if(type === 'next'){
                // listItemDom.appendChild(itemSlider[0]);
                // thumbnailDom.appendChild(itemThumbnail[0]);
                // carouselDom.classList.add('next');

                // listItemDom.appendChild(firstItem);
                // thumbnailDom.appendChild(firstThumnail);
                // carouselDom.classList.add('next');

                if(listItemDom.appendChild(firstItem) === null || thumbnailDom.appendChild(firstThumnail) === null){

                }else{
                    listItemDom.appendChild(firstItem);
                    thumbnailDom.appendChild(firstThumnail);
                    carouselDom.classList.add('next');
                }
                
            }
            else{
                // const positionLastItem = itemSlider.length-1;
                const lastItem = itemSlider[itemSlider.length - 1];
                const lastThumbnail = itemThumbnail[itemThumbnail.length - 1];
                // listItemDom.prepend(itemSlider[positionLastItem]);
                listItemDom.prepend(lastItem);
                // itemThumbnail.prepend(itemThumbnail[positionLastItem]);
                thumbnailDom.prepend(lastThumbnail);
                carouselDom.classList.add('prev');
            }

            clearTimeout(runTimeOut)
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning)

            clearTimeout(runAutoRun)
            runAutoRun = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext)
        }
    }, []);

  return (    
    <div className='carousel'>
        {/* carousel-list */}
        <div className="carousel-list">
            <Carousel_Items img={img1}/>
            <Carousel_Items img={img2}/>
            
            <Carousel_Items img={img3}/>
            <Carousel_Items img={img4}/>
            
        </div>

        {/* thumbnail */}
        <div className="thumbnail">
            <div className="item">
                <img src={img2} alt="" />
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="des">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img3} alt="" />
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="des">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img4} alt="" />
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="des">
                        Description
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img1} alt="" />
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="des">
                        Description
                    </div>
                </div>
            </div>
        </div>

        {/* arrows */}
        <div className="arrows">
            <button  id="prev">{'<'}</button>
            <button  id="next">{'>'}</button>
            {/* <button id="next" onClick={() => showSlider('next')}>{'>'}</button> */}
        </div>

        <div className="time"></div>
        <div className="time1"></div>
    </div>
  )
}


// import React, { useEffect, useState } from 'react';
// import Carousel_Items from './Carousel_Items';
// import './../componentCss/Carousel.css';
// import './../componentCss/Carousel_Items.css';
// import img1 from './../assets/images/img1.jpg';
// import img2 from './../assets/images/img2.jpg';
// import img3 from './../assets/images/img3.jpg';
// import img4 from './../assets/images/img4.jpg';

// export default function Carousel() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const images = [img1, img2, img3, img4];

//     useEffect(() => {
//         const timeAutoNext = 7000;
//         const intervalId = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, timeAutoNext);

//         return () => clearInterval(intervalId);
//     }, [images.length]);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     };

//     return (
//         <div className='carousel'>
//             <div className="carousel-list">
//                 {images.map((img, index) => (
//                     <Carousel_Items key={index} img={img} />
//                 ))}
//             </div>

//             <div className="thumbnail">
//                 {images.map((img, index) => (
//                     <div key={index} className="item">
//                         <img src={img} alt="" />
//                         <div className="content">
//                             <div className="title">
//                                 Name Slider
//                             </div>
//                             <div className="des">
//                                 Description
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="arrows">
//                 <button id="prev" onClick={handlePrev}>{'<'}</button>
//                 <button id="next" onClick={handleNext}>{'>'}</button>
//             </div>
//         </div>
//     );
// }
