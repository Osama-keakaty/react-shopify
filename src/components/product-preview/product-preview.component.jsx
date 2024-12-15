import './product-preview.styles.scss'
import { SHOP_DATA } from '../../shop-data.js'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CategoryPreview from '../cateory-preview/category-preveiw.component.jsx';
import { IoIosStar } from "react-icons/io";
import { useCartStore } from '../../stores/cart.store';
import { useShallow } from 'zustand/shallow';
import { Outlet } from 'react-router-dom';

const ProductPreview = ({ category }) => {
    const addItemToCart = useCartStore(useShallow(state => state.addItemToCart))

    let { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const getItemById = (id) => {
            return SHOP_DATA.flatMap(section => {
                return section.items
            })
                .find(item => item.id === id);
        };
        setProduct(getItemById(+id))
    }, [product, id,]);
    return (
        <>
            <div className='product-preview-container'>
                <div className="product">
                    <div className="product-img">
                        <img src={product.imageUrl} alt="" />
                    </div>
                    <div className="product-discription">
                        <h1>{product.name}</h1>
                        <div className="rating">
                            <span>Reated:</span>
                            <div className="rating-stars-container">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                        </div>
                        <p>Discription: <span>{category} category</span></p>
                        <p>Price:  <span className='price'>{product.price}$</span></p>
                        <button className='add-btn' onClick={() => addItemToCart(product)}>Add to card</button>
                    </div>

                </div>
            </div>

            <CategoryPreview
                categoryPreview={SHOP_DATA.find((categoryName) => categoryName.title === category)}
                categoryName={category}
            />
            <Outlet />
        </>
    )
}
export default ProductPreview;