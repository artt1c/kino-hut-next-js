import React, {FC} from 'react';
import {IMovieFull} from "@/model/IMovieFull";
import apiService from "@/services/api.service";
import MovieHeader from "@/components/movie-header/MovieHeader";
import MovieBody from "@/components/movie-body/MovieBody";

type Params = Promise<{ id:string }>;

type Props = {
  params: Params;
}

const MoviePage:FC<Props> = async ({params}) => {

  const {id} = await params;
  const movie:IMovieFull = await apiService.movie.details(id)

  return (
    <div>
      <MovieHeader movie={movie}/>
      <MovieBody movie={movie}/>
    </div>
  );
};

export default MoviePage;