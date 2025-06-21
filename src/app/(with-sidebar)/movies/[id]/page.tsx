import React, {FC} from 'react';
import {IMovieFull} from "@/model/IMovieFull";
import apiService from "@/services/api.service";
import MovieHeader from "@/components/movie-header/MovieHeader";

type Params = Promise<{ id:string }>;
// type SearchParams = Promise<{ [key:string]:string | undefined}>;

type Props = {
  params: Params;
  // searchParams: SearchParams;
}

const MoviePage:FC<Props> = async ({params}) => {

  const {id} = await params;
  const movie:IMovieFull = await apiService.movie.details(id)

  return (
    <div>
      <MovieHeader movie={movie}/>
    </div>
  );
};

export default MoviePage;