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
    console.log('item',item)
    return (
        <div className='cart-info-item-container'>
            <div className="cart-info-item-content">
                <div className="cart-info-item-img">
                    <img src={item.imageUrl} alt="" />
                </div>
                <div className="cart-info-item-details">
                    <h3>{item.name}</h3>
                    <span className='price'>{item.price}$</span>
                    <div className="edit-quantity">
                        <span className='increase-btn' onClick={() => increaseItemInCart(item)}><IoIosAddCircle /></span>
                        <p>{item.quantity}</p>
                        <span className='decrease-btn' onClick={() => decreaseItemInCart(item)}><IoIosRemoveCircleOutline /></span>
                    </div>
                </div>
            </div>

            <span className='remove-btn' onClick={() => removeItemFromCart(item)}><AiOutlineClose /></span>
        </div>
    )
}
export default CartInfoItem;
