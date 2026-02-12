import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import tshirtImg from '../assets/tshirt.png';
import jeansImg from '../assets/jeans.png';
import scarfImg from '../assets/scarf.png';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <h1 className="hero-title">Discover Your Air Style</h1>
                    <p className="hero-subtitle">Premium fashion for the modern era.</p>
                    <Link to="/category/tops" className="cta-button">Shop Now</Link>
                </div>
            </section>

            <section className="featured container">
                <h2>New Arrivals</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <img src={tshirtImg} alt="Summer Breeze Top" className="product-image-real" />
                        <h3>Summer Breeze Top</h3>
                        <p>₩45,000</p>
                    </div>
                    <div className="product-card">
                        <img src={jeansImg} alt="Sky High Pants" className="product-image-real" />
                        <h3>Sky High Pants</h3>
                        <p>₩62,000</p>
                    </div>
                    <div className="product-card">
                        <img src={scarfImg} alt="Cloud Scarf" className="product-image-real" />
                        <h3>Cloud Scarf</h3>
                        <p>₩21,000</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
