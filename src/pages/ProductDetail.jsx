import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

// Import Images
import tshirtImg from '../assets/tshirt.png';
import blouseImg from '../assets/blouse.png';
import hoodieImg from '../assets/hoodie.png';
import trenchCoatImg from '../assets/trench_coat.png';
import leatherJacketImg from '../assets/leather_jacket.png';
import longPufferImg from '../assets/long_puffer.png';
import jeansImg from '../assets/jeans.png';
import scarfImg from '../assets/scarf.png';

const ProductDetail = () => {
    const { id } = useParams();

    // Consolidated Product Data
    // In a real app, this would be fetched from an API
    const products = {
        1: {
            name: "Premium Cotton T-Shirt",
            price: "₩45,000",
            description: "Experience ultimate comfort with our premium cotton blend t-shirt. Designed for the modern minimalist, this piece features a relaxed fit and breathable fabric that feels as light as air.",
            details: ["100% Organic Cotton", "Breathable", "Relaxed Fit"],
            image: tshirtImg
        },
        101: {
            name: "Silk Touch Blouse",
            price: "₩89,000",
            description: "Elegant and sophisticated, this silk-touch blouse is perfect for both office wear and evening outings. The soft sheen adds a luxurious feel.",
            details: ["Silk-like Finish", "Button Cuffs", "Regular Fit"],
            image: blouseImg
        },
        102: {
            name: "Cozy Grey Hoodie",
            price: "₩65,000",
            description: "Your new go-to for chilly days. Made with ultra-soft fleece lining to keep you warm without adding bulk.",
            details: ["Fleece Lined", "Kangaroo Pocket", "Drawstring Hood"],
            image: hoodieImg
        },
        103: {
            name: "Classic Trench Coat",
            price: "₩210,000",
            description: "A timeless wardrobe staple. This double-breasted trench coat features a water-resistant finish and a removable belt for a customized fit.",
            details: ["Water Resistant", "Double Breasted", "Belted Waist"],
            image: trenchCoatImg
        },
        106: {
            name: "Wool Blend Overcoat",
            price: "₩245,000",
            description: "Stay warm in style with this structured wool blend overcoat. Perfect for layering over suits or casual wear.",
            details: ["Wool Blend", "Notched Lapel", "Lined"],
            image: trenchCoatImg
        },
        104: {
            name: "Urban Leather Jacket",
            price: "₩150,000",
            description: "Add an edge to your look with this faux leather biker jacket. Features silver hardware and a cropped silhouette.",
            details: ["Faux Leather", "Silver Hardware", "Zip Closure"],
            image: leatherJacketImg
        },
        107: {
            name: "Vintage Denim Jacket",
            price: "₩89,000",
            description: "A classic denim jacket with a vintage wash. Versatile and durable.",
            details: ["Cotton Denim", "Button Front", "Chest Pockets"],
            image: hoodieImg // Placeholder
        },
        105: {
            name: "Winter Long Puffer",
            price: "₩280,000",
            description: "Brave the cold with our long puffer coat. Features high-quality down alternative filling for maximum warmth.",
            details: ["Water Repellent", "Down Alternative", "Full Length"],
            image: longPufferImg
        },
        108: {
            name: "Short Down Padding",
            price: "₩195,000",
            description: "A sporty short puffer jacket for active days. Lightweight yet incredibly warm.",
            details: ["Lightweight", "Stand Collar", "Zip Pockets"],
            image: longPufferImg
        },
        2: {
            name: "Sky High Pants",
            price: "₩62,000",
            description: "Elongate your legs with our high-waisted trousers. Tailored for a perfect fit.",
            details: ["High Waisted", "Straight Leg", "Stretch Fabric"],
            image: jeansImg
        },
        201: {
            name: "Classic Denim",
            price: "₩59,000",
            description: "Everyday jeans that don't compromise on comfort. Classic straight cut with a medium wash.",
            details: ["100% Cotton", "5-Pocket Styling", "Medium Wash"],
            image: jeansImg
        },
        3: {
            name: "Cloud Scarf",
            price: "₩21,000",
            description: "Soft as a cloud. This scarf adds a cozy touch to any winter outfit.",
            details: ["Soft Knit", "Oversized", "Fringe Detail"],
            image: scarfImg
        }
    };

    const product = products[id];

    if (!product) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h1>Product Not Found</h1>
                <p>We couldn't find the product you're looking for.</p>
            </div>
        );
    }

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
