import { useShallow } from 'zustand/shallow';
import { useCartStore } from '../../stores/cart.store';
import './sidebar-cart.styles.scss'
import EmptyCart from '../../assets/empty-cart.png'

import SidebarCartProduct from '../sidebar-cart-product/sidebar-cart-product.component';
import { useNavigate } from 'react-router-dom';
const SidebarCart = () => {
    const navigate = useNavigate()
    const { cartItems,setCartIsOpened } = useCartStore(useShallow(state => ({
        cartItems: state.cartItems,
        setCartIsOpened:state.setCartIsOpened
    })))

    const navigateHandler = () => {
        navigate('/checkout')
        setCartIsOpened(false)

    }
    return (
        <div className={`sidebar-cart-container ${cartItems.length ? 'occupied' : ''}`}>

            {cartItems.length ?

                <>
                    <div className="sidebar-cart-products-container">
                        {(cartItems.map((item, index) =>
                            <SidebarCartProduct key={index} item={item} />
                        ))}
                    </div>
                    <div className="view-cart-button-container">
                        <button onClick={navigateHandler}>View Cart</button>
                    </div>
                </>
                : (
                    <>
                        <img src={EmptyCart} alt='' />
                        <span>The Cart Is Empty</span>
                    </>
                )
            }

        </div>
    )
}
export default SidebarCart;
