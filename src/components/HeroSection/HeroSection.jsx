import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "./index.css"
export function HeroSection() {
    return (
        <div id="hero_container">
            <Slide></Slide>
        </div>
    );
};
export function Slide({className}){
    return(
        <div className={'slide container '+ className}>
        <div className="text_box">
            <h2>The view on refreshing</h2>
            <p>Phosfluorescently maintain impactful process.</p>
            <button>READ MORE</button>
        </div>
        <div className="img_box">
            <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image1.jpg" alt="" />
        </div>
    </div>
    )
}