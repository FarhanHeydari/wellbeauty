import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {SliderProduct} from "./SliderProduct";


export function FeaturedSlider() {
    return (
        <Swiper
            slidesPerView={2.5}
            spaceBetween={10}
            style={{zIndex:0}}
            className="featured-swiper"
        >

            <SwiperSlide> <SliderProduct/> </SwiperSlide>
            <SwiperSlide><SliderProduct/></SwiperSlide>
            <SwiperSlide><SliderProduct/></SwiperSlide>
            <SwiperSlide><SliderProduct/></SwiperSlide>
            <SwiperSlide><SliderProduct/></SwiperSlide>
            <SwiperSlide><SliderProduct/></SwiperSlide>
            <SwiperSlide><SliderProduct/></SwiperSlide>
            <SwiperSlide><SliderProduct/></SwiperSlide>
        </Swiper>
    );
}


