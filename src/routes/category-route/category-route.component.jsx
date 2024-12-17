import { Route, Routes, useParams } from 'react-router-dom';
import './category-route.styles.scss'
import { useEffect, useState } from 'react';
import SHOP_DATA from '../../shop-data';
import ProductPreview from '../../components/product-preview/product-preview.component';
import Category from '../../components/category/category.component';


const CategoryRoute = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(SHOP_DATA.find((ShopCategory) => ShopCategory.title === category))
    }, [category, products]);

    return (
            <Routes className='category-route-container'>
                <Route index element={<Category products={products} category={category} />} />
                <Route path=':id' element={<ProductPreview category={category} />} />
            </Routes>
  
    )


}
export default CategoryRoute;