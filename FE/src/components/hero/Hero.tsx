import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import { useAppInfo } from '../../stores/app-info';


interface Banner {
    image: string;
    link: string;
}

const darkBanners: Banner[] = [
    {
        image: '/hero-images/dark-banners/1.png',
        link: '/products/1'
    },
    {
        image: '/hero-images/dark-banners/2.png',
        link: '/products/2'
    },
    {
        image: '/hero-images/dark-banners/4.png',
        link: '/products/4'
    },
    {
        image: '/hero-images/dark-banners/3.png',
        link: '/products/3'
    },
];
const lightBanners: Banner[] = [
    {
        image: '/hero-images/light-banners/1.png',
        link: '/products/1'
    },
    {
        image: '/hero-images/light-banners/2.png',
        link: '/products/2'
    },
    {
        image: '/hero-images/light-banners/3.png',
        link: '/products/3'
    },
    {
        image: '/hero-images/light-banners/4.png',
        link: '/products/4'
    },
];
const Hero = () => {

    const { theme } = useAppInfo();
    const banners = theme === 'light' ? lightBanners : darkBanners;
    return (
        <div className="hero-container w-5/6 min-h-[500px] mx-auto mt-5 rounded-lg select-none overflow-hidden">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {banners.map((banner, index) => 
                    <SwiperSlide key={index}>
                        <img src={banner.image} alt="Shopping hero" className='banner-image' />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default Hero;
