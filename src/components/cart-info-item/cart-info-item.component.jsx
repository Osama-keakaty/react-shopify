import React from 'react'
import { useCartStore } from '../../stores/cart.store'
import { useShallow } from 'zustand/shallow'
import { IoIosAddCircle, IoIosRemoveCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import './cart-info-item.styles.scss'
const CartInfoItem = ({ item }) => {
    const { removeItemFromCart, increaseItemInCart, decreaseItemInCart } = useCartStore(useShallow(state => ({
        removeItemFromCart: state.removeItemFromCart,
        increaseItemInCart: state.increaseItemInCart,
        decreaseItemInCart: state.decreaseItemInCart,
    })))
    console.log(item)
    return (
        <div className='cart-info-item-container'>
            <div className="cart-info-item-content">
            <img src={item.imageUrl} alt="" />
            <div className="cart-info-item-details">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
                <div className="edit-quantity">
                    <button className='increase-btn' onClick={() => increaseItemInCart(item)}><IoIosAddCircle /></button>
                    <p>{item.quantity}</p>
                    <button className='decrease-btn' onClick={() => decreaseItemInCart(item)}><IoIosRemoveCircleOutline /></button>
                </div>
            </div>
            </div>
            
            <span className='remove-btn' onClick={() => removeItemFromCart(item)}><AiOutlineClose /></span>
        </div>
    )
}
export default CartInfoItem;
