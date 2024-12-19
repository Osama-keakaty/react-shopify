import './product-card.styles.scss'
import { IoIosStar } from "react-icons/io";
import { useCartStore } from '../../stores/cart.store';
import { useShallow } from 'zustand/shallow';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product, categoryName }) => {
    const addItemToCart = useCartStore(useShallow(state => state.addItemToCart))
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(`/${categoryName}/${product.id}`)
    }
    return (
        <div className='product-card-container'>

            <img src={product.imageUrl} alt="" onClick={navigateHandler} />
            <div className="footer-card">
                <div className='product-card-details-container'>
                    <h5 className='name'>{product.name}</h5>
                    <div className="rating-stars-container">
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div>
                    <span className='price'>{product.price}$</span>
                </div>
                <button
                    className='add-to-cart-button'
                    onClick={() => addItemToCart(product)}>+</button>

            </div>
        </div>
    )
}
export default ProductCard;