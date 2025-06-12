import React, {FC} from 'react';
import {useSwiper} from "swiper/react";

type Props = {
  prevClassName?: string,
  nextClassName?: string,
}

const SwiperNavBtn:FC<Props> = ({prevClassName, nextClassName}) => {
  const swiper = useSwiper();

  return (
    <div className='flex gap-2 w-fit'>
      <div className={prevClassName || 'swiper-button-prev'} onClick={()=> swiper.slidePrev()}></div>
      <div className={nextClassName || 'swiper-button-next'} onClick={()=> swiper.slideNext()}></div>
    </div>
  );
};

export default SwiperNavBtn;