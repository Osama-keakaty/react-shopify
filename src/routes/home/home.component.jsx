import Slider from '../../components/slider/slider.component';
import './home.styles.scss'
import { Outlet } from 'react-router-dom';
import { categoriesData } from '../../categories-data';
import KeyFeatures from '../../components/key-features/key-features.component';
import SwiperComponent from '../../components/swiper/swiper.component';
import MovedAds from '../../components/moved-ads/moved-ads.component';
import { SHOP_DATA } from '../../shop-data.js'
import CategoryPreview from '../../components/cateory-preview/category-preveiw.component.jsx';
const Home = () => {
    return (
        <div className='home-container'>
            <Outlet />
            <Slider categoriesData={categoriesData} />
            <KeyFeatures />
            <SwiperComponent />
            <MovedAds title={'PAY ONLY FOR YOUR LOVING ELECTRONICS'} />
            <CategoryPreview
                categoryPreview={SHOP_DATA.find((category) => category.title === 'men')}
                categoryName={'men'}
            />
            <CategoryPreview
                categoryPreview={SHOP_DATA.find((category) => category.title === 'hats')}
                categoryName={'hats'}
            />
        </div>
    )

}
export default Home; 
