import { useShallow } from 'zustand/shallow';
import { useCartStore } from '../../stores/cart.store';
import './checkout.styles.scss'
import { Divider, Steps } from "antd";
import CheckoutCartInfo from '../../components/checkout-cart-info/checkout-cart-info.component';
const Checkout = () => {
    const { checkoutNum, setCheckoutNum } = useCartStore(useShallow(state => ({
        checkoutNum: state.checkoutNum,
        setCheckoutNum: state.setCheckoutNum
    })))
    const { Step } = Steps
    return (
        <>
            <div className='checkout-container'>

                <Steps  current={checkoutNum} onChange={(c) => setCheckoutNum(c)} labelPlacement='horizontal' >
                    <Step className='checkout-step' title="Cart Info" description="Checkout" percent={25} />
                    <Step className='checkout-step' title="Details" description='Billing Adress' percent={50} />
                    <Step className='checkout-step' title="Payment" description='Pay With' />
                    <Step className='checkout-step' title="Review" description='Rate Us' />
                </Steps>
            </div>
            <Divider className='divider' />
            <div className='Checkout-content'>
                {checkoutNum === 0 && <CheckoutCartInfo/>}
                {checkoutNum === 1 && 'two'}
                {checkoutNum === 2 && 'three'}
                {checkoutNum === 3 && 'four'}
            </div>
        </>

    )
}

export default Checkout;