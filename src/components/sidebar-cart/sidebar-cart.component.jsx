import { useShallow } from 'zustand/shallow';
import { useCartStore } from '../../stores/cart.store';
import './sidebar-cart.styles.scss'
import EmptyCart from '../../assets/empty-cart.png'

import SidebarCartProduct from '../sidebar-cart-product/sidebar-cart-product.component';
const SidebarCart = () => {
    const { cartItems } = useCartStore(useShallow(state => ({
        cartItems: state.cartItems,

    })))
    return (
        <div className={`sidebar-cart-container ${cartItems.length ? 'occupied' : ''}`}>

            {cartItems.length ?

                <>
                    <div className="sidebar-cart-products-container">
                        {(cartItems.map((item, index) =>
                            <SidebarCartProduct key={index} item={item}/>
                        ))}
                    </div>
                    <div className="view-cart-button-container">
                        <button>View Cart</button>
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
