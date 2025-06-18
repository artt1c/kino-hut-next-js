import React  from 'react';
import TopRatedMovies from "@/components/top-rated-movies/TopRatedMovies";
import apiService from "@/services/api.service";
import ApiService from "@/services/api.service";
import genresListToMap from "@/helpers/genres-list-to-map-helper";
import MoviesListBySelectedGenre from "@/components/movies-by-selected-genre/MoviesListBySelectedGenre";

const Home = async () => {

  const topRateMovies = await apiService.movie.topRated()
  const genresList = await ApiService.genre.movieGenresList()
  const genresMapList = genresListToMap(genresList);

  return (
    <main className='w-max-[75vw]'>
      <TopRatedMovies moviesList={topRateMovies.results}  genres={genresMapList}/>
      <MoviesListBySelectedGenre genresList={genresList}/>
    </main>
  );
};

export default Home;