import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import tshirtImg from '../assets/tshirt.png';

const ProductDetail = () => {
    const { id } = useParams();

    // Mock Data (In a real app, fetch from API based on ID)
    const product = {
        id: 1,
        name: "Premium Cotton T-Shirt",
        price: "₩45,000",
        description: "Experience ultimate comfort with our premium cotton blend t-shirt. Designed for the modern minimalist, this piece features a relaxed fit and breathable fabric that feels as light as air. Perfect for any season.",
        details: [
            "100% Organic Cotton",
            "Breathable & Lightweight",
            "Relaxed Fit",
            "Machine Washable"
        ],
        image: tshirtImg
    };

    return (
        <div className="product-detail-page container">
            <div className="product-detail-layout">
                <div className="product-image-section">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info-section">
                    <span className="product-tag">New Arrival</span>
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.description}</p>

                    <ul className="product-features">
                        {product.details.map((item, index) => (
                            <li key={index}>• {item}</li>
                        ))}
                    </ul>

                    <div className="product-actions">
                        <button className="add-to-cart-btn">Add to Cart</button>
                        <button className="wishlist-btn">♥</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
