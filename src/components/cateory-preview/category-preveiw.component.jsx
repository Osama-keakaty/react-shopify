import ProductCard from '../product-card/product-card.component';
import './category-preveiw.styles.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAppStore } from '../../stores/app.store';
import { useShallow } from 'zustand/shallow';
import { useNavigate } from 'react-router-dom';


const CategoryPreview = ({ categoryPreview, categoryName }) => {
    const navigate = useNavigate()
    const { widthWindow } = useAppStore(useShallow((state) => ({
        widthWindow: state.widthWindow,
    })))
    const navigateHandler = () => {
        navigate(categoryName)
    }

    return (
        <div className='category-preview-container'>
            <div className="category-preview-header-container">
                <span onClick={navigateHandler}>
                    See More
                </span>
            </div>
            <div className='category-preview-swiper-container'>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={widthWindow <= 970 ? 2 : widthWindow <= 1200 ? 3 : 4}
                >
                    {categoryPreview.items.map((product, index) =>
                        index < 5 &&
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} categoryName={categoryName} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    )
}
export default CategoryPreview;