import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo">
                    SKYMALL
                </Link>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><Link to="/category/tops">상의 (Tops)</Link></li>
                        <li><Link to="/category/bottoms">하의 (Bottoms)</Link></li>
                        <li><Link to="/category/accessories">악세사리 (Accessories)</Link></li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <Link to="/product/1" className="auth-link">Login</Link>
                    <Link to="/product/1" className="auth-link">Sign Up</Link>
                    <button className="icon-btn">🔍</button>
                    <button className="icon-btn">🛒</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
