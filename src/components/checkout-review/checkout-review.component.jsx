import RateStars from '../rate-stars/rate-stars.component';
import BasicButton from '../basic-button/basic-button.component';
import './checkout-review.styles.scss'
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../stores/cart.store';
import { useShallow } from 'zustand/shallow';
const ChechoutReview = () => {
const clearCartItems = useCartStore(useShallow(state=>state.clearCartItems))
    const generateNumber = () => {
        return Math.random() * 100000000000000000;
    }
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/');
        clearCartItems();
    }
    return (
        <div className='checkout-review-container'>
            <FaCircleCheck size={60} className='checked-circle' />
            <div className="checkout-review-content">
                <h2>Successfully Purchased Cloud Server ECS! </h2>
                <span>Order number: <span>{generateNumber()}</span> Cloud server configuration takes 1-5 minutes, please wait.</span>
                <RateStars />
                <BasicButton title={'Buy Again'} onClick={onClickHandler} />
            </div>
        </div>
    );
}
export default ChechoutReview;