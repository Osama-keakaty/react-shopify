import { Route, Routes, useParams } from 'react-router-dom';
import './category.styles.scss'
import { useEffect, useState } from 'react';
import SHOP_DATA from '../../shop-data';
import ProductCard from '../product-card/product-card.component';
import ProductPreview from '../product-preview/product-preview.component';
const Category = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(SHOP_DATA.find((ShopCategory) => ShopCategory.title === category))
    }, [category, products]);
    const Cate = () => {
        return (
            <div className="category-Route-container">
                {Array.isArray(products.items) &&
                    products.items.map((product => <ProductCard key={product.id} product={product} />))
                }
            </div>

        )
    }
    return (
        <>
            <Routes>
            <Route index element={<Cate />}/>
                <Route path=':id' element={<ProductPreview />} />
        </Routes>

        </>
        )


}
export default Category;