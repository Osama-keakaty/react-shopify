import ProductCard from '../product-card/product-card.component'
import './category.styles.scss'
const Category = ({products,category}) => {
    return (
        <div className="category-container">
            {Array.isArray(products.items) &&
                products.items.map((product => <ProductCard categoryName={category} key={product.id} product={product} />))
            }
        </div>

    )
}
export default Category;