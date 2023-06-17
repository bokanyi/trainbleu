// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { Swiper, SwiperSlide,  } from 'swiper/react';
 import { Navigation } from "swiper"; 
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FC } from 'react';

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
      navigation
     
      modules={[Navigation]}
      // className=" mySwiper"
    //   autoplay={{
    //     delay: 5000,
    //     disableOnInteraction: false
    // }}
   
    >
      
      {slides.map((slide)=> 
        <SwiperSlide className='h-60 md:h-128 bg-white flex justify-center mb-4
        md:p-8 rounded-xl'>
            
          <img  className='object-contain' src={slide}></img>
          </SwiperSlide>
      )}
     
      
    </Swiper>
  );
};