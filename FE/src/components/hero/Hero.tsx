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
        image: '/hero-images/dark-banners/1.webp',
        link: '/products/1'
    },
    {
        image: '/hero-images/dark-banners/2.webp',
        link: '/products/2'
    },
    {
        image: '/hero-images/dark-banners/4.webp',
        link: '/products/4'
    },
    {
        image: '/hero-images/dark-banners/3.webp',
        link: '/products/3'
    },
];
const lightBanners: Banner[] = [
    {
        image: '/hero-images/light-banners/1.webp',
        link: '/products/1'
    },
    {
        image: '/hero-images/light-banners/2.webp',
        link: '/products/2'
    },
    {
        image: '/hero-images/light-banners/3.webp',
        link: '/products/3'
    },
    {
        image: '/hero-images/light-banners/4.webp',
        link: '/products/4'
    },
];


const Hero = () => {

    const { theme } = useAppInfo();
    const banners = theme === 'light' ? lightBanners : darkBanners;
    return (

        <div className="h-full w-full mx-auto rounded-lg select-none">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-full"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index} className="h-full w-full flex justify-center items-center">
                        <img
                            src={banner.image}
                            alt="Shopping hero"
                            className="h-full max-w-full object-contain rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default Hero;