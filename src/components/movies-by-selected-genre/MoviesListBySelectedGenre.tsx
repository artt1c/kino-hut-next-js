'use client'

import React, {FC, useState} from 'react';
import AllGenresList from "@/components/all-genres-list/AllGenresList";
import MoviesListByGenre from "@/components/movies-list-by-genre/MoviesListByGenre";
import {IGenre} from "@/model/IGenres";
import {IMoviesResponse} from "@/model/IMoviesResponse";

type Props = {
  genresList: IGenre[];
}

const MoviesListBySelectedGenre:FC<Props> = ({genresList}) => {

  const [moviesList, setMoviesList] = useState<IMoviesResponse | null>(null)

  const movieListByGenreLift = async (movies:IMoviesResponse) => {
    setMoviesList(movies)
  }


  return (
    <>
      <AllGenresList genres={genresList} lift={movieListByGenreLift}/>
      <MoviesListByGenre moviesList={moviesList}/>
    </>
  );
};

export default MoviesListBySelectedGenre;