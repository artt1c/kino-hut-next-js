import React  from 'react';
import apiService from "@/services/api.service";
import ApiService from "@/services/api.service";
import TrendingMovies from "@/components/trending-movies/TrendingMovies";
import genresListToMap from "@/helpers/genres-list-to-map-helper";
import MoviesListBySelectedGenre from "@/components/movies-by-selected-genre/MoviesListBySelectedGenre";

const Home = async () => {

  const trendingMovies = await apiService.movie.trending()
  const genresList = await ApiService.genre.movieGenresList()
  const genresMapList = genresListToMap(genresList);

  return (
    <main className='w-full mx-auto'>
      <TrendingMovies moviesList={trendingMovies.results} genres={genresMapList}/>
      <MoviesListBySelectedGenre genresList={genresList}/>
    </main>
  );
};

export default Home;