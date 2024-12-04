import './slider.styles.scss'
import { useShallow } from 'zustand/shallow';
import { useHomeStore } from '../../stores/home.store';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
let imageIndex = 0;
let slideInterval;
const Slider = ({ categoriesData }) => {
    const slideRef = useRef()
    const { imageSliderIndex, setImageSliderIndex } = useHomeStore(useShallow((state) => ({
        imageSliderIndex: state.imageSliderIndex,
        setImageSliderIndex: state.setImageSliderIndex,
    })))

    // TODO install React slick instead of using this bullshit 
    const nextSlideHandler = () => {
        imageIndex = (imageIndex + 1) % 3;
        setImageSliderIndex(imageIndex);
        slideRef.current.classList.add("slide-anim");

    }

    const previousSlideHandler = () => {
        const productsLength = 3;
        imageIndex = (imageSliderIndex + productsLength - 1) % productsLength;
        setImageSliderIndex(imageIndex);
        slideRef.current.classList.add("slide-anim");
    };

    const removeAnimation = () => {
        slideRef.current.classList.remove("slide-anim")
    }

    const pauseSlider = () => {
        clearInterval(slideInterval);
    }
    const startSlider = () => {
        slideInterval = setInterval(() => {
            nextSlideHandler();
        }, 3000);
    }

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);
        startSlider();
        return () => {
            pauseSlider();
        };
    }, []);


    return (
        <div className='slider-container'>

            <div className="slider-content" ref={slideRef}>

                <Link className="slider-slide" to={categoriesData[imageSliderIndex].title.toLowerCase()}>
                    <img src={categoriesData[imageSliderIndex].imageUrl} alt="" />
                </Link>

                <div className="flip-slide-btns-container">
                    <button onClick={nextSlideHandler} className='flip-slide-btn'>
                        <FaChevronLeft />
                    </button>
                    <button onClick={previousSlideHandler} className='flip-slide-btn'>
                        <FaChevronRight />
                    </button>
                </div>

            </div>

            <div className="slider-static-images">
                {categoriesData.map((item) => (
                    item.id > 3 &&
                    <Link to={item.title.toLowerCase()} className="slider-static-image" key={item.id}>
                        <img src={item.imageUrl} alt="" />
                    </Link>
                ))}
            </div>
        </div>
    )

}
export default Slider;