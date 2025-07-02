import React, {FC} from 'react';
import {IMovieFull} from "@/model/IMovieFull";
import MovieVideosCard from "@/components/movie-videos-card/MovieVideosCard";

type Props = {
  movie:IMovieFull;
}

const MovieBody:FC<Props> = ({movie}) => {

  return (
    <section className='w-full bg-(--background-transparent) p-8 rounded-4xl'>
      <MovieVideosCard videoInfo={movie.videos}/>
    </section>
  );
};

export default MovieBody;