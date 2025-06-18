'use client'

import React, {FC, useEffect, useRef} from 'react';
import {IMoviesResponse} from "@/model/IMoviesResponse";
import MovieCardForList from "@/components/movie-card-for-list/MovieCardForList";
import {Swiper, SwiperSlide} from "swiper/react";
import type { Swiper as SwiperClass } from 'swiper';
import {Mousewheel} from "swiper/modules";
import 'swiper/css';

type Props = {
  moviesList: IMoviesResponse | null;
}

const MoviesListByGenre:FC<Props> = ({moviesList}) => {

  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.slideTo(0)
  }, [moviesList]);

  return (
    <div className='w-[75vw]'>
      <Swiper
        slidesPerView={'auto'}
        initialSlide={0}
        onSwiper={(swiperInstance) => {
          swiperRef.current = swiperInstance;
        }}
        spaceBetween={15}
        mousewheel={{
          enabled: true,
        }}
        modules={[Mousewheel]}
      >
        {
          moviesList?.results.map(movie => (
            <SwiperSlide key={movie.id} className='!w-fit'>
              <MovieCardForList movie={movie}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default MoviesListByGenre;