import Slider from '../../components/slider/slider.component';
import './home..styles.scss'
import { Outlet } from 'react-router-dom';
import { categoriesData } from '../../categories-data';
import KeyFeatures from '../../components/key-features/key-features.component';
import SwiperComponent from '../../components/swiper/swiper.component';
import MovedAds from '../../components/moved-ads/moved-ads.component';
const Home = () => {
    return (
        <div className='home-container'>
            <Outlet />
            <Slider categoriesData={categoriesData} />
            <KeyFeatures />
            <SwiperComponent />
            <MovedAds/>
        </div>
    )

}
export default Home; 
