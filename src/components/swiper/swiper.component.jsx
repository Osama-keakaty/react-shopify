import './swiper.styles.scss'
import swiperImage1 from './../../assets/cat1.jpg';
import swiperImage2 from './../../assets/cat2.jpg';
import swiperImage3 from './../../assets/cat3.jpg';
import swiperImage4 from './../../assets/cat4.jpg';
import swiperImage5 from './../../assets/cat5.jpg';
import swiperImage6 from './../../assets/cat6.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useAppStore } from '../../stores/app.store';
import { useShallow } from 'zustand/shallow';

const SwiperComponent = () => {
    const { widthWindow } = useAppStore(useShallow((state) => ({
        widthWindow: state.widthWindow,
    })))

    const swiperImages = [
        {
            swiperImage: swiperImage1,
            title: "Toys"
        },
        {
            swiperImage: swiperImage2,
            title: "Sport"
        },
        {
            swiperImage: swiperImage3,
            title: "Gaming"
        },
        {
            swiperImage: swiperImage4,
            title: "Furniture"
        },
        {
            swiperImage: swiperImage5,
            title: "Fashion"
        },
        {
            swiperImage: swiperImage6,
            title: "Cameras"
        }
    ]

    return (
        <div className="swiper-container">

            <Swiper
                className="swiper-content"
                spaceBetween={40}
                slidesPerView={widthWindow <= 600 ? 3 : widthWindow <= 1000 ? 4 : 5}
            >
                {swiperImages.map((item, index) => (
                    <SwiperSlide className="swiper-item" key={index}>
                        <img src={item.swiperImage} alt="" />
                        <h4>{item.title}</h4>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )

}
export default SwiperComponent;
