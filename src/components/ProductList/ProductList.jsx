import React, { useState } from "react";
import "./ProductList.css";
import CartItem from "../CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cartSlice";
import plantsArray from "../../data/plantsData";

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    // Kiểm tra plant đã có trong giỏ hàng chưa bằng .some()
    const isInCart = (plantName) => {
        return cartItems.some((item) => item.name === plantName);
    };

    const calculateTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <div>
            <div className="navbar">
                <div className="tag">
                    <div className="luxury">
                        <img
                            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                            alt="Paradise Nursery logo"
                        />
                        <a href="/" onClick={handleHomeClick}>
                            <div>
                                <h3>Paradise Nursery</h3>
                                <i>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="navbar-links">
                    {showCart && (
                        <a href="#" onClick={handlePlantsClick} className="navbar-link">
                            ← Back to Plants
                        </a>
                    )}
                    <a href="#" onClick={handleCartClick} className="navbar-link cart-link">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            width="28"
                            height="28"
                            fill="none"
                        >
                            <circle cx="80" cy="216" r="12" fill="white"></circle>
                            <circle cx="184" cy="216" r="12" fill="white"></circle>
                            <path
                                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                                fill="none"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            ></path>
                        </svg>
                        {calculateTotalQuantity() > 0 && (
                            <span className="cart_quantity_count">
                                {calculateTotalQuantity()}
                            </span>
                        )}
                    </a>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category) => (
                        <div key={category.category}>
                            <h1>
                                <div>{category.category}</div>
                            </h1>
                            <div className="product-list">
                                {category.plants.map((plant) => (
                                    <div className="product-card" key={plant.name}>
                                        <img
                                            className="product-image"
                                            src={plant.image}
                                            alt={plant.name}
                                        />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description">
                                            {plant.description}
                                        </div>
                                        <div className="product-cost">{plant.cost}</div>
                                        <button
                                            className={`product-button ${isInCart(plant.name) ? "added-to-cart" : ""}`}
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={isInCart(plant.name)}
                                        >
                                            {isInCart(plant.name)
                                                ? "Added to Cart"
                                                : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
