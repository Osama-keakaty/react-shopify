import './checkout-payment.styles.scss'
import BasicInput from '../basic-input/basic-input.component'
import BasicButton from '../basic-button/basic-button.component'
import { useState } from 'react';
import { Divider } from 'antd'
import { useCartStore } from '../../stores/cart.store';
import { useShallow } from 'zustand/shallow';

const CheckoutPayment = () => {
        const  setCheckoutNum  = useCartStore(useShallow(state => ( state.setCheckoutNum)))
    
    const [selectedOption, setSelectedOption] = useState(0); 
    const clickHandler=(e)=>{
        e.preventDefault()
    }

    return (
        <div className='checkout-payment-container'>
           <div className="checkout-payment-content">
           <h2> checkout payment</h2>
            <form id="optionsForm" onSubmit={clickHandler}>
                <label>
                    <input type="radio" name="options" value="credit-card" onChange={()=>setSelectedOption(0)} />
                    Pay with credit card
                </label>
                <div className={`credit-card-container ${selectedOption===0 && 'checked'}`}>
                    <div className="inputs-container">
                        <BasicInput attribute={{placeholder:'User Name'}} />
                        <BasicInput attribute={{placeholder:'Basic usage'}} />
                    </div>
                    <div className="inputs-container">
                        <BasicInput attribute={{placeholder:'Basic usage'}} />
                        <BasicInput attribute={{placeholder:'Basic usage'}} />
                    </div>
                    <BasicButton title={'Submit'}/>
                </div>
                <Divider />
                <label>
                    <input type="radio" name="options" value="paypal" onChange={()=>setSelectedOption(1)}/>
                    Pay with Paypal
                </label>
                <div className={`paypal-container ${selectedOption===1 && 'checked'}`}>
                        <BasicInput attribute={{placeholder:'Basic usage'}} />
                        <BasicInput attribute={{placeholder:'Basic usage'}} />
                    <BasicButton title={'Submit'}/>
                </div>
                <Divider />
                <label>
                    <input type="radio" name="options" value="cash" onChange={()=>setSelectedOption(2)}/>
                    Cash On Delivery
                </label>
            </form>
           </div>
           <BasicButton title={'Review'} onClick={()=>setCheckoutNum(3)}/>
        </div>
    )
}
export default CheckoutPayment;