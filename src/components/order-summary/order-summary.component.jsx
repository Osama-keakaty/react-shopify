import { useShallow } from 'zustand/shallow';
import { useCartStore } from '../../stores/cart.store';
import { Divider } from 'antd'
import './order-summary.styles.scss'
import BasicInput from '../basic-input/basic-input.component';
import BasicButton from '../basic-button/basic-button.component';
const OrderSummary = () => {
    const totalItemPrice = useCartStore(useShallow(state => state.totalItemPrice))
    return (
        <div className='order-summary-container'>
            <div className="order-summary-content">
                <span>Total:</span>
                <span>{totalItemPrice}$</span>
            </div>
            <Divider />
            <div className="order-summary-form">
                <span className='comments'>
                    Additional Comments
                </span>
                <BasicInput attribute={{
                    type: "text",
                    maxLength: 20,
                    placeholder: 'Add comment'
                }} />
                <textarea name="" rows={7} spellCheck={false} resize={'disable'}></textarea>
                <BasicButton title={'Checkout'}/>
            </div>
        </div>
    );
}
export default OrderSummary;
