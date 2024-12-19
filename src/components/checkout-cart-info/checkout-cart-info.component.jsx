import { useShallow } from 'zustand/shallow';
import { useCartStore } from '../../stores/cart.store';
import './checkout-cart-info.styles.scss'
import CartInfoItem from '../cart-info-item/cart-info-item.component';

const CheckoutCartInfo = () => {
    const { cartItems } = useCartStore(useShallow(state => ({
        cartItems: state.cartItems,


    })))
    console.log(cartItems)
    return (
        <>
            {cartItems.length &&

                (<div className='checkout-cart-info-container'>
                    {cartItems.map(item => <CartInfoItem key={item.id} item={item} />)}
                </div>)}
        </>
    )
}
export default CheckoutCartInfo;