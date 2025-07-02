'use client';

import React, {FC} from 'react';
import Image from "next/image";
import {imagesUrl} from "@/urls/Urls";
import MovieGenresList from "@/components/movie-genres-list/MovieGenresList";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCreative, Mousewheel, Pagination} from "swiper/modules";
import {useRouter} from "next/navigation";
import {IMovie} from "@/model/IMovie";

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import './TrendingMovies.css';

type Props = {
  moviesList: IMovie[];
  genres: Map<number, { name:string, id:number }>;
}

const TrendingMovies:FC<Props> = ({moviesList, genres}) => {

  const router = useRouter();

  return (
    <section className='top-rate-movies max-w-full mb-8'>
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
            translate: ['25%', 0, -300],
          },
        }}
        modules={[EffectCreative, Pagination, Autoplay, Mousewheel]}
      >
        {
        moviesList?.map((movie, id) => (
          <SwiperSlide
            className={'rounded-3xl !w-[90%] !h-auto'}
            key={id}
          >
            <Image
              src={imagesUrl.base_url+ imagesUrl.backdrop_sizes[2] + movie.backdrop_path}
              alt={movie.title}
              priority={true}
              width={1280}
              height={720}
              className='w-full object-cover object-center aspect-[21/9]'
            />

            <div
              className='absolute top-0 left-0 info w-full h-full p-5 flex-col justify-between hidden cursor-pointer'
              onClick={() => router.push('/movies/' + movie.id)}
            >
              <MovieGenresList date={movie.release_date} genres={movie.genre_ids.map(id => genres.get(id))}/>
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

    </section>
  );
};

export default TrendingMovies;