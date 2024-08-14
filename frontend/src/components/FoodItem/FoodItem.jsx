import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';


const FoodItem = ({ food_id, food_name, food_price, food_description, food_image }) => {
    const { cartItems, addToCart, removeFromCart, url, currency,food_list} = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={url + "/images/" + food_image} alt="" />
                {!cartItems[food_id] ? (
                    <img
                        className='add'
                        onClick={() => addToCart(food_id)}
                        src={assets.add_icon_white}
                        alt=""
                    />
                ) : (
                    <div className="food-item-counter">
                        <img
                            src={assets.remove_icon_red}
                            onClick={() => removeFromCart(food_id)}
                            alt=""
                        />
                        <p>{cartItems[food_id]}</p>
                        <img
                            src={assets.add_icon_green}
                            onClick={() => addToCart(food_id)}
                            alt=""
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{food_name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{food_description}</p>
                <p className="food-item-price">
                    {currency}{food_price}
                </p>
            </div>
        </div>
    );
};

export default FoodItem;
