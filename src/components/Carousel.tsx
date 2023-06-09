import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { Pagination, Navigation } from "swiper";
import 'swiper/css';
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { ReactNode, FC } from 'react';

type Props = {
  // children: ReactNode;
  slides: string[]
}

export const Carousel:FC<Props> = ({slides}) => {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      grabCursor={true}
      // pagination={{
      //   clickable: true,
      // }}
      // modules={[Pagination]}
      className="mySwiper"
    //   autoplay={{
    //     delay: 5000,
    //     disableOnInteraction: false
    // }}
   
    >
      {slides.map((slide)=> 
        <SwiperSlide>
          <img src={slide}></img>
          </SwiperSlide>
      )}
      
    </Swiper>
  );
};