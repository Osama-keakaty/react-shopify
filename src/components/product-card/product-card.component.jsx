import './product-card.styles.scss'
import { IoIosStar } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { useCartStore } from '../../stores/cart.store';
import { useShallow } from 'zustand/shallow';
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
const ProductCard = ({ product, categoryName }) => {
    const addItemToCart = useCartStore(useShallow(state => state.addItemToCart))
    const setProductNum = useCartStore(useShallow(state => state.setProductNum))
    const cartItems = useCartStore(useShallow(state => state.cartItems))
    const navigate = useNavigate();
    const navigateHandler=()=>{
    navigate(categoryName ? `${categoryName}/${product.id}`:`${product.id}`)
    }
    useEffect(() => {
        setProductNum()
    }, [setProductNum, cartItems])
    return (
        <div className='product-card-container'>

                <img src={product.imageUrl} alt="" onClick={navigateHandler}/>
            <div className="footer">
                <div className='product-card-details-container'>
                    <h5 className='name'>{product.name}</h5>
                    <div className="rating-stars-container">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div>
                    <span className='price'>{product.price}$</span>
                </div>
                <button
                    className='add-to-cart-button'
                    onClick={() => addItemToCart(product)}><FiPlus /></button>

            </div>
        </div>
    )
}
export default ProductCard;