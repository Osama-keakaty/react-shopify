import { useShallow } from 'zustand/shallow';
import { useCartStore } from '../../stores/cart.store';
import { IoCheckmarkOutline } from "react-icons/io5";
import './checkout.styles.scss'
const Checkout = () => {
    const { checkoutNum, setCheckoutNum } = useCartStore(useShallow(state => ({
        checkoutNum: state.checkoutNum,
        setCheckoutNum: state.setCheckoutNum
    })))
    return (
        <>
            <div className='checkout-container'>
                <div className="checkout-section" onClick={() => setCheckoutNum(1)}>
                    <div className={`step-checkout-title  ${checkoutNum > 1 ? 'active' : ''}`}>
                        <span className='number'>{checkoutNum === 1 ? 1 : <IoCheckmarkOutline />}</span>
                        <span>Cart Info</span>
                    </div>
                </div>

                <div className="checkout-section" onClick={() => setCheckoutNum(2)}>
                    <div className={`step-checkout-title  ${checkoutNum > 2 ? 'active' : ''}`}>
                        <span className='number'>{checkoutNum > 2 ? <IoCheckmarkOutline /> : 2}</span>
                        <span>Details</span>
                    </div>
                </div>

                <div className="checkout-section" onClick={() => setCheckoutNum(3)}>
                    <div className={`step-checkout-title ${checkoutNum > 3 ? 'active' : ''}`}>
                        <span className='number'>{checkoutNum > 3 ? <IoCheckmarkOutline /> : 3}</span>
                        <span>Payment</span>
                    </div>
                </div>

                <div className="checkout-section" onClick={() => setCheckoutNum(4)}>
                    <div className={`step-checkout-title ${checkoutNum > 4 ? 'active' : ''}`}>
                        <span className='number'>{checkoutNum > 4 ? <IoCheckmarkOutline /> : 4}</span>
                        <span>Review</span>
                    </div>
                </div>
            </div>
            <hr />
        </>

    )
}

export default Checkout;