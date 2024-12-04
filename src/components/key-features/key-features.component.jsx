import './key-features.styles.scss'
import { AiFillCar, AiFillMoneyCollect } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoCalendar } from "react-icons/io5";
const KeyFeatures = () => {
    return (
        <div className='key-features-container'>
            <div className="key-features-content">
                <div className="key-feature-container">
                    <AiFillCar className='key-feature-icon'/>
                    <div className="key-feature-text">
                        <h5>Fast Delivery</h5>
                        <p>Start from $10</p>
                    </div>
                </div>

                <div className="key-feature-container">
                    <AiFillMoneyCollect className='key-feature-icon' />
                    <div className="key-feature-text">
                        <h5>Money Guarantee</h5>
                        <p>7 Days Back</p>
                    </div>
                </div>

                <div className="key-feature-container">
                    <IoCalendar  className='key-feature-icon' />
                    <div className="key-feature-text">
                        <h5>365 Days</h5>
                        <p>For free return</p>
                    </div>
                </div>

                <div className="key-feature-container">
                    <RiMoneyDollarCircleFill className='key-feature-icon' />
                    <div className="key-feature-text">
                        <h5>Payment</h5>
                        <p>Secure system</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default KeyFeatures;