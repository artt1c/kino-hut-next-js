'use client';

import React, {FC} from 'react';
import {IMoviesList} from "@/model/ITopRated";
import {imagesUrl} from "@/urls/Urls";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCreative, Mousewheel, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import GenresList from "@/components/genres-list/GenresList";
import Image from "next/image";

type Props = {
  moviesList: IMoviesList[];
  genres: Map<number, string>;
}

const TopRatedMovies:FC<Props> = ({moviesList, genres}) => {


  return (
    <div className='w-[75vw]'>
      <Swiper
        className='!m-0 relative'
        slidesPerView={"auto"}
        mousewheel={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true
        }}
        loop={!!moviesList?.length}
        onSlideChange={(swiper)=> {
          const activeIndex = swiper.activeIndex
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
        modules={[EffectCreative, Pagination, Autoplay, Mousewheel]}
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

            <div className='info w-full h-full p-5 relative flex-col justify-between hidden'>
              <GenresList date={movie.release_date} genres={movie.genre_ids.map(id => genres.get(id))}/>

              <div className='flex justify-between items-end'>
                <div className='bg-[rgba(109,106,103,.5)] w-fit px-2 py-1.5 rounded-2xl font-bold flex'>
                  <div className='rounded-full border-2 border-amber-50 p-2'>
                    <Image
                      className='pl-1'
                      src='/play-button.svg'
                      alt={movie.title}
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className='px-3'>
                    {movie.title}
                    <br/>
                    <span className='font-normal'>Play trailer</span>
                  </div>
                </div>

                <button className='rounded-full bg-[rgba(109,106,103,.5)] border-2 border-black p-2 pb-1.5 h-fit w-fit invert-100 cursor-pointer'>
                  <Image
                    src='/like.svg'
                    alt='like'
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))
        }
      </Swiper>
    </div>
  );
};

export default TopRatedMovies;