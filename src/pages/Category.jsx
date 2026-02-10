import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Category.css';

// Import Images
import tshirtImg from '../assets/tshirt.png';
import blouseImg from '../assets/blouse.png';
import hoodieImg from '../assets/hoodie.png';
// Re-use mockups for other categories if needed, or placeholders
import jeansImg from '../assets/jeans.png';
import scarfImg from '../assets/scarf.png';

const Category = () => {
    const { type } = useParams();

    const getTitle = (type) => {
        switch (type) {
            case 'tops': return '상의';
            case 'bottoms': return '하의';
            case 'accessories': return '악세사리';
            default: return '상품';
        }
    };

    // Mock Data Definition
    const products = {
        tops: [
            { id: 1, name: "Premium Cotton T-Shirt", price: "₩45,000", image: tshirtImg },
            { id: 101, name: "Silk Touch Blouse", price: "₩89,000", image: blouseImg },
            { id: 102, name: "Cozy Grey Hoodie", price: "₩65,000", image: hoodieImg },
        ],
        bottoms: [
            { id: 2, name: "Sky High Pants", price: "₩62,000", image: jeansImg },
            { id: 201, name: "Classic Denim", price: "₩59,000", image: jeansImg }, // Duplicate for demo
        ],
        accessories: [
            { id: 3, name: "Cloud Scarf", price: "₩21,000", image: scarfImg },
        ]
    };

    const currentProducts = products[type] || [];

    return (
        <div className="category-page container">
            <div className="category-header">
                <h1>{getTitle(type)} Collection</h1>
                <p>Premium {type} for you.</p>
            </div>

            <div className="product-grid">
                {currentProducts.length > 0 ? (
                    currentProducts.map((item) => (
                        <div key={item.id} className="product-card">
                            {/* Link to Detail Page (For demo, all link to /product/1 or we could update routing dynamically) */}
                            <Link to={`/product/${item.id}`}>
                                <img src={item.image} alt={item.name} className="product-image-real" />
                            </Link>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>No products found in this category.</p>
                )}
            </div>
        </div>
    );
};

export default Category;
