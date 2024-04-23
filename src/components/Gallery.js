import React, { useState } from 'react';
import './../componentCss/Gallery.css'; // Assuming this is the correct path to your CSS file
import { Link } from 'react-router-dom';

// Import images
import DogImage1 from '../assets/images/gallery/dog.jpg';
import DogImage2 from '../assets/images/gallery/Dog 1.jpg';
import DogImage3 from '../assets/images/gallery/Dog 4.webp';
import DogImage4 from '../assets/images/gallery/Dog 6.webp';
import DogImage5 from '../assets/images/gallery/Dog 77.jpeg';
import DogImage6 from '../assets/images/gallery/Dog 8.jpg';
import DogImage7 from '../assets/images/gallery/img1.jpg';
import CatImage1 from '../assets/images/gallery/Cat.jpg';
import CatImage2 from '../assets/images/gallery/Cat1.jpg';
import CatImage3 from '../assets/images/gallery/Cat 2.jpg';
import CatImage4 from '../assets/images/gallery/Cat3.jpeg';
import BirdImage1 from '../assets/images/gallery/bird11.jpg';
import BirdImage2 from '../assets/images/gallery/bird1.jpg';
import OtherImage1 from '../assets/images/gallery/Other 1.jpg';
import OtherImage2 from '../assets/images/gallery/Other 2.jpg';
import OtherImage3 from '../assets/images/gallery/Guine.jpeg';

function FilterableImageGallery() {
    const [activeFilter, setActiveFilter] = useState("All");

    // Sample data for images
    const images = [
        { src: DogImage1, alt: "Dog", category: "Dogs", description: "Buddy is a golden retriever with a heart of gold. His sunny disposition and boundless energy make him the perfect companion for outdoor adventures, always ready to fetch a ball or splash around in the nearest pond." },
        { src: DogImage2, alt: "Dog", category: "Dogs", description: "Luna is a sleek and graceful greyhound, known for her elegant strides and gentle nature. She loves nothing more than curling up in a cozy spot with her favorite chew toy, basking in the warmth of the sun." },
        { src: DogImage3, alt: "Dog", category: "Dogs", description: "Rocky is a sturdy and loyal German shepherd, with a keen intelligence and unwavering loyalty to his family. Whether it's keeping watch over the house or playing with the kids, Rocky is always there with a wagging tail and a protective spirit." },
        { src: DogImage4, alt: "Dog", category: "Dogs", description: "Mochi is a fluffy and adorable Pomeranian, with a personality as sweet as her name. Despite her small size, she's full of spunk and loves to strut her stuff, turning heads wherever she goes with her fluffy coat and perky ears." },
        { src: DogImage5, alt: "Dog", category: "Dogs", description: "Max is a playful and energetic border collie, with a sharp mind and a love for mental challenges. Whether it's mastering a new trick or herding sheep on the farm, Max is always up for a challenge and eager to please his owners." },
        { src: DogImage6, alt: "Dog", category: "Dogs", description: "Rex is a regal and majestic Great Dane, with a towering presence and a heart of gold. Despite his imposing size, he's a gentle giant at heart, always eager to make friends and shower his loved ones with affection." },
        { src: DogImage7, alt: "Dog", category: "Dogs", description: "Coco is a mischievous and playful Jack Russell terrier, with a zest for life that's contagious to everyone around her. Whether she's chasing squirrels in the park or snuggling up under the covers, Coco is always on the go and full of surprises." },
        { src: CatImage1, alt: "Cat", category: "Cats", description: "Whiskers is a sleek and elegant Siamese cat, with piercing blue eyes and a graceful demeanor. Known for her affectionate nature and love of lounging in sunbeams, Whiskers is the epitome of feline charm." },
        { src: CatImage2, alt: "Cat", category: "Cats", description: "Mittens is a fluffy and playful Maine Coon, with tufted ears and a bushy tail that rivals a lion's mane. Despite her large size, she's a gentle giant at heart, always ready for a game of chase or a snuggle on the couch." },
        { src: CatImage3, alt: "Cat", category: "Cats", description: "Shadow is a mysterious and aloof black cat, with a coat as dark as midnight and eyes that seem to hold secrets. Despite her independent nature, she has a soft spot for her favorite human and can often be found curled up in their lap, purring contentedly." },
        { src: CatImage4, alt: "Cat", category: "Cats", description: "Oliver is a charming and charismatic tabby cat, with a personality as colorful as his striped coat. Known for his mischievous antics and insatiable curiosity, Oliver keeps his family on their toes with his playful energy and endless charm." },
        { src: BirdImage1, alt: "Bird", category: "Birds", description: "Rio is a vibrant and colorful parrot, with feathers that rival the hues of a tropical sunset. Known for his playful mimicry and cheerful squawks, Rio brings a splash of exotic charm wherever he goes, delighting everyone with his animated personality." },
        { src: BirdImage2, alt: "Bird", category: "Birds", description: "Sky is a graceful and elegant dove, with soft white feathers and eyes that seem to hold the wisdom of the heavens. Known for her gentle cooing and serene presence, Sky brings a sense of peace and tranquility to her surroundings, reminding all who encounter her of the beauty of flight and freedom." },
        { src: OtherImage1, alt: "Other", category: "Others", description: "Peanut is a fluffy and adorable Abyssinian guinea pig, with a rosette-adorned coat that adds to his charm. Known for his outgoing personality and penchant for popcorn snacks, Peanut is the life of the guinea pig party." },
        { src: OtherImage3, alt: "Other", category: "Others", description: "Cinnamon is a sleek and elegant Peruvian guinea pig, with long, flowing locks that cascade down her back like a luxurious mane. Despite her regal appearance, she's a gentle soul who enjoys snuggling in her cozy nest of hay and exploring new tunnels in her cage." },
        { src: OtherImage2, alt: "Other", category: "Others", description: "Snowball is a pure white rabbit with velvety soft fur that seems to shimmer under the sunlight. Their large, expressive brown eyes sparkle with curiosity as they hop around the garden, their fluffy tail bobbing behind them like a cotton ball in the breeze. Snowball loves to explore every nook and cranny, twitching their nose inquisitively as they investigate the world around them." }
    ];

    // Filter cards based on activeFilter
    const filteredImages = activeFilter === "All" ? images : images.filter(image => image.category === activeFilter);

    return (
        <div className="container">
            {/* Filter Buttons */}
            <div className="filter_buttons">
                {['All', 'Dogs', 'Cats', 'Birds', 'Others'].map(filter => (
                    <button key={filter} className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)}>{filter}</button>
                ))}
            </div>
            {/* Image Cards */}
            <div className="filterable_cards">
                {filteredImages.map((image, index) => (
                    <div className="card" key={index}>
                        <img src={image.src} alt={image.alt} />
                        <div className="card_body">
                            <h6 className="class_title">{image.category}</h6>
                            <p className="card_text">{image.description}</p>
                            <Link to="/moreDetails"><button className="card_button" >See more</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilterableImageGallery;
