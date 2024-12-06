import './product-preview.styles.scss'
import { SHOP_DATA } from '../../shop-data.js'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const ProductPreview = () => {
    let { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const getItemById = (id) => {
            return SHOP_DATA.flatMap(section => section.items)
                .find(item => item.id === id);
        };
        setProduct(getItemById(+id))
    }, [product, id]);
    return (
        <h1>
            {product.name}
        </h1>
    )
}
export default ProductPreview;