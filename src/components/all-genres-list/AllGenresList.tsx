'use client';

import React, {FC, useEffect, useState} from "react";
import {IGenre} from "@/model/IGenres";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Navigation} from "swiper/modules";

import './AllGenresList.css'
import "swiper/css";
import 'swiper/css/navigation';
import SwiperNavBtn from "@/components/siwper-nav-btn/SwiperNavBtn";
import {cn} from "@/lib/utils";
import {IMoviesResponse} from "@/model/IMoviesResponse";

type Props = {
  genres: IGenre[],
  lift: (movies:IMoviesResponse) => void;
}

const AllGenresList:FC<Props> = ({genres, lift}) => {

  const [selectGenre, setSelectGenre] = useState<number>(genres[0].id)

  useEffect(() => {
     fetch('/api/movies/by-genre-id?genreId='+ selectGenre)
       .then(res => res.json())
       .then(data => {
         lift(data)
       })
  }, [selectGenre]);

  return (
    <Swiper
      className="all_genres-list !w-full !m-0 !mb-5 !pb-1"
      spaceBetween={10}
      mousewheel={{
        enabled: true,
      }}
      modules={[Navigation, Mousewheel]}
      slidesPerView={"auto"}
    >
      {
        genres.map((genre, id)=> (
          <SwiperSlide
            className={cn("!w-fit font-bold bg-(--interactive) rounded-3xl border-2 border-transparent hover:border-(--foreground-main)", selectGenre === genre.id ? 'bg-(--foreground-main) text-(--background) ' : '')}
            key={id}
          >
            <button
              className={'px-5 py-2 cursor-pointer'}
              onClick={()=> {
                setSelectGenre(genre.id)

              }}
            >
              {genre.name}
            </button>
          </SwiperSlide>
        ))
      }
      <div className={'swiper-button-nav z-99'}>
        <SwiperNavBtn prevClassName={'all_genres__prev'} nextClassName={'all_genres__next'}/>
      </div>
    </Swiper>
  );
};

export default AllGenresList;