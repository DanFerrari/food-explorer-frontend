import { Container } from "./styles";
import { Navbar } from "../../components/Navbar";
import {Card} from "../../components/Card";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules';

export function Home() {



  return (
    <Container>
      <Navbar />
      <section>
        <img src="src/assets/imgs/foodHomeBack.png" alt="" />
        <div>
          <p>Sabores inigualáveis</p>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </section >

                        <div class="mySlider">
                                <h2>Refeições</h2>
                                    <Swiper 
                                    slidesPerView={3}
                                    spaceBetween={5}
                                    loop={true}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    >
                                            <SwiperSlide><Card/></SwiperSlide>
                                            <SwiperSlide><Card/></SwiperSlide>
                                            <SwiperSlide><Card/></SwiperSlide>
                                            <SwiperSlide><Card/></SwiperSlide>

                                    </Swiper>
                        </div>



      <div class="mySlider">
                    <h2>Sobremesas</h2>
                            <Swiper 
                            slidesPerView={3}
                            spaceBetween={5}
                            loop={true}
                            pagination={{
                            clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            >
                                    <SwiperSlide><Card/></SwiperSlide>
                                    <SwiperSlide><Card/></SwiperSlide>
                                    <SwiperSlide><Card/></SwiperSlide>
                                    <SwiperSlide><Card/></SwiperSlide>

                            </Swiper>
      </div>


                        <div class="mySlider">
                                <h2>Bebidas</h2>
                                    <Swiper 
                                    slidesPerView={3}
                                    spaceBetween={5}
                                    loop={true}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    >
                                            <SwiperSlide><Card/></SwiperSlide>
                                            <SwiperSlide><Card/></SwiperSlide>
                                            <SwiperSlide><Card/></SwiperSlide>
                                            <SwiperSlide><Card/></SwiperSlide>

                                    </Swiper>
                        </div>

    
    </Container>
  );
}
