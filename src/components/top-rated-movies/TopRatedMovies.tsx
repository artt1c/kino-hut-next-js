'use client';

import React, {FC, useEffect, useState} from 'react';
import {IMoviesList, ITopRated} from "@/model/ITopRated";
import {imagesUrl} from "@/urls/Urls";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, EffectCreative, Pagination} from "swiper/modules";
import {cn} from "@/lib/utils";

type Props = {
  moviesListProps: ITopRated;
}

const TopRatedMovies:FC<Props> = ({moviesListProps}) => {
  const [moviesList, setMoviesList] = useState<IMoviesList[] | null>(null)

  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    setMoviesList(moviesListProps?.results);
  }, [moviesListProps]);

  return (
    <div className='w-[75vw]'>
      <Swiper
        className='!m-0 relative'
        slidesPerView={"auto"}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true
        }}
        loop={!!moviesList?.length}
        onSlideChange={(swiper)=> {
          const activeIndex = swiper.activeIndex
          setActiveIndex(activeIndex)
          const next = swiper.slides[activeIndex+1]
          if (next) {
            swiper.slides[activeIndex].style.filter = 'brightness(100%)'
            next.style.filter = 'brightness(50%)'
          }
        }}
        pagination={{
          dynamicBullets:true,
          clickable: true
        }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            translate: ['-20%', 0, -400],
            opacity: 0,
            scale: 0.8,
          },
          next: {
            translate: ['30%', 0, -300],
          },
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
      >
        {
        moviesList?.map((movie, id) => (
          <SwiperSlide
            className={'!w-[65vw] !h-[30vw] rounded-3xl relative'}
            key={id}
          >
            <div
              className='w-full h-full absolute top-0 left-0'
              style={{
                backgroundImage: `url(${imagesUrl.base_url+ imagesUrl.backdrop_sizes[2] + movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className={cn('w-full h-full p-5 relative', id === activeIndex ? 'z-20' : '')}>
              {movie.title}
            </div>
          </SwiperSlide>
        ))
        }
      </Swiper>
    </div>
  );
};

export default TopRatedMovies;