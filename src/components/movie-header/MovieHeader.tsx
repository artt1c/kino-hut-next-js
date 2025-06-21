import React, {FC} from 'react';
import {IMovieFull} from "@/model/IMovieFull";
import {imagesUrl} from "@/urls/Urls";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";

import './MovieHeader.css'
import MovieRating from "@/components/movie-rating/MovieRating";

type Props = {
  movie:IMovieFull
}

const MovieHeader:FC<Props> = ({movie}) => {

  console.log(movie)

  return (
    <section className='w-full min-h-[720px]'>

      <div className='w-full h-auto absolute top-0 left-0 z-[-1]'>
        <Image
          src={imagesUrl.base_url+ imagesUrl.backdrop_sizes[2] + movie.backdrop_path}
          alt={movie.title}
          width={1280}
          height={720}
          priority={true}
          className='w-full h-auto brightness-80 aspect-[7/4] object-top object-cover'
        />
        <div className='absolute top-0 left-0 w-full h-full gradient'>

        </div>
      </div>

      <div className='h-full w-full flex '>
        <div className='w-fit h-fit flex gap-8 bg-(--background-transparent) p-8 rounded-4xl'>
          <Image
            src={imagesUrl.base_url+ imagesUrl.poster_sizes[3] + movie.poster_path}
            alt={movie.title}
            width={342}
            height={513}
            priority={true}
            className='rounded-xl aspect-[2/3]'
          />

          <div>
            <div className='flex items-center gap-2 mb-4'>
              <h2 className='text-5xl font-extrabold'>
                {movie.title}
              </h2>
              <span className='text-3xl opacity-65'>
                ({movie.release_date.slice(0, 4)})
              </span>
            </div>

            <MovieRating rating={movie.vote_average}/>

            <div className='mb-4'>
              {movie.genres.map((genre, id) => (
                <Badge
                  key={id}
                  variant='secondary'
                  className='bg-[rgba(109,106,103,.5)] px-3 py-1 rounded-2xl font-bold text-base mr-3'
                >
                  <Link href={'/genre/' + genre.id}>
                    {genre.name}
                  </Link>
                </Badge>
              ))}
            </div>

            <div className='opacity-90 mb-5'>
              <h3 className='text-3xl mb-2'>Overview</h3>
              <p className='max-w-[600px] '>
                {movie.overview}
              </p>
            </div>

            <div className='mb-10'>
              Duration:
              <span className='ml-2 mr-1 font-bold'>
                {movie.runtime}
              </span>
              min
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default MovieHeader;