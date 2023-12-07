import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import'./Slider.css';

interface SliderProps{
    settings: SwiperProps; 
    children: ReactNode;
}




export default function Slider( {settings,children}: SliderProps) {
return(
<Swiper modules={[Navigation, Pagination, Scrollbar, A11y ]} {...settings}>
    {children}

</Swiper>);
};