import React, { useState } from 'react';
//import './../Pages/cart/cart.css'; // Import your CSS file
import './../cart/Cart.css'
import img1 from './Images/1.png'
import img2 from './Images/2.webp'
import img3 from './Images/3.png'
import img4 from './Images/4.png'
import img5 from './Images/5.png'
import img6 from './Images/6.png'
//import './../cart/Images'
const Product = ({ dataName, imgSrc, title, price, onClick }) => (
  <div className="product" data-name={dataName} onClick={onClick}>
    <img src={imgSrc} alt="" />
    <h3>{title}</h3>
    <div className="price">{price}</div>
  </div>
);

const Preview = ({ dataTarget, imgSrc, title, stars, description, price, onClose }) => (
  <div className="preview" data-target={dataTarget}>
    <i className="fas fa-times" onClick={onClose}></i>
    <img src={imgSrc} alt="" />
    <h3>{title}</h3>
    <div className="stars">{stars}</div>
    <p>{description}</p>
    <div className="price">{price}</div>
    <div className="buttons">
      <a href="#" className="buy">buy now</a>
      <a href="#" className="cart">add to cart</a>
    </div>
  </div>
);

const Cart = () => {
  const [showPreview, setShowPreview] = useState(true);
  const [activePreview, setActivePreview] = useState(null);

  const handleProductClick = (name) => {
    setShowPreview(true);
    setActivePreview(name);
  };

  const handlePreviewClose = () => {
    setShowPreview(false);
    setActivePreview(null);
  };

  return (
    <div className="container">
      <h3 className="title">Available Products</h3>
      <div className="products-container">
        <Product
          dataName="p-1"
          imgSrc={img1}
          title="Multivitamin"
          price="RS.1500.00"
          onClick={() => handleProductClick("p-1")}
        />

        <Product
          dataName="p-2"
          imgSrc={img2}
          title="Healing Spray"
          price="RS.2000.00"
          onClick={() => handleProductClick("p-2")}
        />
        <Product
          dataName="p-3"
          imgSrc={img3}
          title="TickFree-Shampoo"
          price="RS.1520.00"
          onClick={() => handleProductClick("p-3")}
        />
        <Product
          dataName="p-4"
          imgSrc={img4}
          title="Pedigree"
          price="RS.5200.00"
          onClick={() => handleProductClick("p-4")}
        />
        <Product
          dataName="p-5"
          imgSrc={img5}
          title="Cage"
          price="RS.15000.00"
          onClick={() => handleProductClick("p-5")}
        />
        <Product
          dataName="p-6"
          imgSrc={img6}
          title="Food Plate"
          price="RS.800.00"
          onClick={() => handleProductClick("p-6")}
        />
        {/* Repeat the Product component for each product */}
      </div>
      {showPreview && (
        <div className="products-preview">
          {/* Pass props to Preview components based on activePreview */}
          <Preview
            dataTarget={activePreview}
            imgSrc={img1}
            title="VertiSCIENCE Multivitamin"
            stars={<><i className="fas fa-star"></i>...</>}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem."
            price="RS.1500.00"
            onClose={handlePreviewClose}
          />

            <Preview
            dataTarget={activePreview}
            imgSrc={img2}
            title="Kawell Healing Spray"
            stars={<><i className="fas fa-star"></i>...</>}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem."
            price="RS.2000.00"
            onClose={handlePreviewClose}
          />
          <Preview
            dataTarget={activePreview}
            imgSrc={img3}
            title="Natural TickFree-Shampoo"
            stars={<><i className="fas fa-star"></i>...</>}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem."
            price="RS.1520.00"
            onClose={handlePreviewClose}
            />
          <Preview
            dataTarget={activePreview}
            imgSrc={img4}
            title="Pedigree for Pets"
            stars={<><i className="fas fa-star"></i>...</>}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem."
            price="RS.5200.00"
            onClose={handlePreviewClose}
            />
            <Preview
            dataTarget={activePreview}
            imgSrc={img5}
            title="Pet Cage"
            stars={<><i className="fas fa-star"></i>...</>}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem."
            price="RS.15000.00"
            onClose={handlePreviewClose}
            />
            <Preview
            dataTarget={activePreview}
            imgSrc={img6}
            title="Good Dog Food Plate"
            stars={<><i className="fas fa-star"></i>...</>}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem."
            price="RS.800.00"
            onClose={handlePreviewClose}
            />
          {/* Repeat the Preview component for each product */}
        </div>
      )}
    </div>
  );
};

export default Cart;
