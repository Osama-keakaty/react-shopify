import { useShallow } from 'zustand/shallow';
import { useCartStore } from '../../stores/cart.store';
import BasicButton from '../basic-button/basic-button.component';
import BasicInput from '../basic-input/basic-input.component';
import './checkout-details.styles.scss'
const CheckoutDetails = () => {
    const  setCheckoutNum  = useCartStore(useShallow(state => ( state.setCheckoutNum)))
    return (
        <div className='checkout-details-container'>
            <h2>Shipping Address</h2>
            <div className="checkout-details-content">
                <div className="inputs-container">
                    <BasicInput attribute={{ placeholder: 'Full Name' }} />
                    <BasicInput attribute={{ placeholder: 'Street Address' }} />
                    <BasicInput attribute={{ placeholder: 'City' }} />

                </div>
                <div className="inputs-container">
                    <BasicInput attribute={{ placeholder: 'State/Province' }} />
                    <BasicInput attribute={{ placeholder: 'Postal Code' }} />
                    <BasicInput attribute={{ placeholder: 'Country' }} />
                </div>
            </div>
                    <BasicInput attribute={{ placeholder: 'Phone Number' }} />
                    <BasicButton title={'Procced To Payment'} onClick={()=>setCheckoutNum(2)} />
        </div>

    )
}

export default CheckoutDetails;