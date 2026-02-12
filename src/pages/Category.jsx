import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Category.css';

// Import Images
import tshirtImg from '../assets/tshirt.png';
import blouseImg from '../assets/blouse.png';
import hoodieImg from '../assets/hoodie.png';
import trenchCoatImg from '../assets/trench_coat.png';
import leatherJacketImg from '../assets/leather_jacket.png';
import longPufferImg from '../assets/long_puffer.png';

// Re-use mockups for other categories if needed, or placeholders
import jeansImg from '../assets/jeans.png';
import scarfImg from '../assets/scarf.png';

const Category = () => {
    const { type } = useParams();
    const [subCategory, setSubCategory] = useState('all');

    const getTitle = (type) => {
        switch (type) {
            case 'tops': return '상의 (Tops)';
            case 'bottoms': return '하의 (Bottoms)';
            case 'accessories': return '악세사리 (Accessories)';
            default: return '상품';
        }
    };

    // Subcategories definition
    const topsSubCategories = [
        { id: 'all', label: 'All' },
        { id: 'coats', label: 'Coats' },
        { id: 'jackets', label: 'Jackets' },
        { id: 'padding', label: 'Padding' },
    ];

    // Mock Data Definition
    const products = {
        tops: [
            // Original Items
            { id: 1, name: "Premium Cotton T-Shirt", price: "₩45,000", image: tshirtImg, sub: 'all' },
            { id: 101, name: "Silk Touch Blouse", price: "₩89,000", image: blouseImg, sub: 'all' },
            { id: 102, name: "Cozy Grey Hoodie", price: "₩65,000", image: hoodieImg, sub: 'all' },

            // Coats
            { id: 103, name: "Classic Trench Coat", price: "₩210,000", image: trenchCoatImg, sub: 'coats' },
            { id: 106, name: "Wool Blend Overcoat", price: "₩245,000", image: trenchCoatImg, sub: 'coats' }, // Reusing image for variety

            // Jackets
            { id: 104, name: "Urban Leather Jacket", price: "₩150,000", image: leatherJacketImg, sub: 'jackets' },
            { id: 107, name: "Vintage Denim Jacket", price: "₩89,000", image: hoodieImg, sub: 'jackets' }, // Placeholder for variety

            // Padding
            { id: 105, name: "Winter Long Puffer", price: "₩280,000", image: longPufferImg, sub: 'padding' },
            { id: 108, name: "Short Down Padding", price: "₩195,000", image: longPufferImg, sub: 'padding' }, // Reusing image for variety
        ],
        bottoms: [
            { id: 2, name: "Sky High Pants", price: "₩62,000", image: jeansImg },
            { id: 201, name: "Classic Denim", price: "₩59,000", image: jeansImg },
        ],
        accessories: [
            { id: 3, name: "Cloud Scarf", price: "₩21,000", image: scarfImg },
        ]
    };

    // Using simple approach to avoid duplicate variable names from previous edits
    const currentProducts = products[type] || [];

    // Filter logic
    const displayedProducts = type === 'tops'
        ? currentProducts.filter(p => subCategory === 'all' || p.sub === subCategory || (subCategory === 'all' && !p.sub))
        : currentProducts;

    return (
        <div className="category-page container">
            <div className="category-header">
                <h1>{getTitle(type)}</h1>
                <p>Premium {type} Collection</p>

                {type === 'tops' && (
                    <div className="subcategory-filter">
                        {topsSubCategories.map(sub => (
                            <button
                                key={sub.id}
                                className={`filter-btn ${subCategory === sub.id ? 'active' : ''}`}
                                onClick={() => setSubCategory(sub.id)}
                            >
                                {sub.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="product-grid">
                {displayedProducts.length > 0 ? (
                    displayedProducts.map((item) => (
                        <div key={item.id} className="product-card">
                            <Link to={`/product/${item.id}`}>
                                <img src={item.image} alt={item.name} className="product-image-real" />
                            </Link>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                    ))
                ) : (
                    <p className="no-products">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default Category;
