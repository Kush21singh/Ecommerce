import React, { useState } from "react";
import album1Image from './Album1.jpg';
import album2Image from './Album2.jpg';
import merch1Image from './Merch1.jpg'; // Add the actual image URL for Merch 1
import merch2Image from './Merch2.jpg'; // Add the actual image URL for Merch 2
import "./MusicAlbumShoppingPage.css";

const MusicAlbumShoppingPage = () => {
  const [cart, setCart] = useState([]); // Initialize cart as an empty array

  const album1 = {
    id: 1,
    title: "Album 1",
    price: 12.99,
  };

  const album2 = {
    id: 2,
    title: "Album 2",
    price: 14.99,
  };

  const merch1 = {
    id: 3,
    title: "Merch 1",
    price: 19.99,
  };

  const merch2 = {
    id: 4,
    title: "Merch 2",
    price: 24.99,
  };

  const handleAddToCart = (item) => {
    // Add the selected item to the cart
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="music-album-shopping-page">
      <h1>Music</h1>
      <div className="album-container">
        <div key={album1.id} className="album-card">
          <img
            src={album1Image}
            alt={album1.title}
            className="album-image"
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div className="album-title">{album1.title}</div>
          <div className="album-price">${album1.price}</div>
          <button onClick={() => handleAddToCart(album1)}>Add to cart</button>
        </div>
        <div key={album2.id} className="album-card">
          <img
            src={album2Image}
            alt={album2.title}
            className="album-image"
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div className="album-title">{album2.title}</div>
          <div className="album-price">${album2.price}</div>
          <button onClick={() => handleAddToCart(album2)}>Add to cart</button>
        </div>
      </div>
      <h1>MERCH</h1>
      <div className="merch-container">
        <div key={merch1.id} className="album-card">
          <img
            src={merch1Image}
            alt={merch1.title}
            className="album-image"
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div className="album-title">{merch1.title}</div>
          <div className="album-price">${merch1.price}</div>
          <button onClick={() => handleAddToCart(merch1)}>Add to cart</button>
        </div>
        <div key={merch2.id} className="album-card">
          <img
            src={merch2Image}
            alt={merch2.title}
            className="album-image"
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div className="album-title">{merch2.title}</div>
          <div className="album-price">${merch2.price}</div>
          <button onClick={() => handleAddToCart(merch2)}>Add to cart</button>
        </div>
      </div>

     <div className="see-cart">
        <button>
          See Cart
        </button>
      </div>
    </div>
  );
};

export default MusicAlbumShoppingPage;