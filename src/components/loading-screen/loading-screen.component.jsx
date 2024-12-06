import './loading-screen.styles.scss'
import { ReactComponent as CartLogo } from '../../assets/cart-shopping-ecommerce-shop-svgrepo-com.svg'

const LoadingScreen = () => {
    return (
        <div className='loading-screen-container'>
            <div className="logo-container">
                <CartLogo className="logo" />
            </div>
            <h1>React Shopify</h1>
        </div>
    )
}
export default LoadingScreen;