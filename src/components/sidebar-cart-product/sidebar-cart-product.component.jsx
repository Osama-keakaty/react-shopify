import { useShallow } from 'zustand/shallow';
import { useCartStore } from '../../stores/cart.store';
import { IoIosAddCircle, IoIosRemoveCircleOutline } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import './sidebar-cart-product.styles.scss'
const SidebarCartProduct = ({ item }) => {
    const { increaseItemInCart, decreaseItemInCart, removeItemFromCart } = useCartStore(useShallow(state => ({
        increaseItemInCart: state.increaseItemInCart,
        decreaseItemInCart: state.decreaseItemInCart,
        removeItemFromCart: state.removeItemFromCart,

    })))
    return (<>
        <div className='sidebar-cart-product-container'>
            <div className="sidebar-cart-product-text">
                <button className='increase-btn' onClick={() => increaseItemInCart(item)}><IoIosAddCircle /></button>
                <p>{item.quantity}</p>
                <button className='decrease-btn' onClick={() => decreaseItemInCart(item)}><IoIosRemoveCircleOutline /></button>
            </div>
            <div className="sidebar-cart-product-img">
                <img src={item.imageUrl} alt="" />
            </div>
            <div className="sidebar-cart-product-details">
                <h5>{item.name}</h5>
                <span>{item.price}$</span>
            </div>
            <span className='remove-btn' onClick={() => removeItemFromCart(item)}><AiOutlineClose /></span>
        </div>

    </>)
}
export default SidebarCartProduct;