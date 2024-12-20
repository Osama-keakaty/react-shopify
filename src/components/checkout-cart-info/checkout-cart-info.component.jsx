import { useShallow } from 'zustand/shallow';
import { useCartStore } from '../../stores/cart.store';
import './checkout-cart-info.styles.scss'
import CartInfoItem from '../cart-info-item/cart-info-item.component';
import EmptyCart from '../../assets/empty-cart.png'

const CheckoutCartInfo = () => {
    const { cartItems } = useCartStore(useShallow(state => ({
        cartItems: state.cartItems,


    })))
    console.log(cartItems)
    return (
        <div className={`checkout-cart-info-container ${cartItems.length ===0 && 'empty'}`}>
            {cartItems.length > 0 ?
                (
                    <>
                        {cartItems.map(item => <CartInfoItem key={item.id} item={item} />)}

                    </>
                )
                :
                (
                    <div className='empty-cart'>
                        <img src={EmptyCart} alt='' />
                        <span>The Cart Is Empty</span>
                    </div>
                )
            }
        </div>
        )
    }
    export default CheckoutCartInfo;