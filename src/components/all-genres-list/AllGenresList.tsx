'use client';

import React, {FC} from "react";
import {IGenre} from "@/model/IGenres";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel, Navigation} from "swiper/modules";

import './AllGenresList.css'
import "swiper/css";
import 'swiper/css/navigation';
import SwiperNavBtn from "@/components/siwper-nav-btn/SwiperNavBtn";

type Props = {
  genres: IGenre[]
}

const AllGenresList:FC<Props> = ({genres}) => {
  return (
    <Swiper
      className="all_genres-list !m-0"
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
            className="!w-fit font-bold bg-(--interactive) px-6 py-3 rounded-3xl"
            key={id}
          >
            {genre.name}
          </SwiperSlide>
        ))
      }
      <div className={'swiper-button-nav'}>
        <SwiperNavBtn prevClassName={'all_genres__prev'} nextClassName={'all_genres__next'}/>
      </div>
    </Swiper>
  );
};

export default AllGenresList;