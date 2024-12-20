import { useShallow } from 'zustand/shallow';
import { useCartStore } from '../../stores/cart.store';
import './checkout.styles.scss'
import { Divider, Steps } from "antd";
import CheckoutCartInfo from '../../components/checkout-cart-info/checkout-cart-info.component';
import OrderSummary from '../../components/order-summary/order-summary.component';
import CheckoutDetails from '../../components/checkout-details/checkout-details.component';
import CheckoutReview from '../../components/checkout-review/checkout-review.component';
import CheckoutPayment from '../../components/checkout-payment/checkout-payment.component';
const Checkout = () => {
    const { checkoutNum, setCheckoutNum } = useCartStore(useShallow(state => ({
        checkoutNum: state.checkoutNum,
        setCheckoutNum: state.setCheckoutNum
    })))
    const { Step } = Steps
    return (
        <>
            <div className='checkout-container'>
                <Steps current={checkoutNum} onChange={(c) => setCheckoutNum(c)} labelPlacement='horizontal' >
                    <Step className='checkout-step' title="Cart Info" description="Checkout" percent={25} />
                    <Step className='checkout-step' title="Details" description='Billing Adress' percent={50} />
                    <Step className='checkout-step' title="Payment" description='Pay With' />
                    <Step className='checkout-step' title="Review" description='Rate Us' />
                </Steps>
            </div>
            <div className="divider">
                <Divider />
            </div>
            <div className='checkout-content'>
                {checkoutNum === 0 &&
                    <>
                        <CheckoutCartInfo />
                        <OrderSummary />
                    </>
                }
                {checkoutNum === 1 &&
                    <>
                        <CheckoutDetails />
                        <OrderSummary />
                    </>}
                {checkoutNum === 2 &&
                    <>
                        <CheckoutPayment />
                        <OrderSummary />
                    </>}
                {checkoutNum === 3 &&
                    <>
                        <CheckoutReview />
                    </>
                    }
            </div>
        </>

    )
}

export default Checkout;