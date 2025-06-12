import React from 'react';
import TopRatedMovies from "@/components/top-rated-movies/TopRatedMovies";
import apiService from "@/services/api.service";
import ApiService from "@/services/api.service";
import genresListToMap from "@/helpers/genres-list-to-map-helper";
import AllGenresList from "@/components/all-genres-list/AllGenresList";

const Home = async () => {

  const topRateMovies =await apiService.movie.topRated()
  const genresList = await ApiService.genre.movieMapList()
  const genresMapList = genresListToMap(genresList);
  return (
    <main className='w-max-[75vw]'>
      <TopRatedMovies moviesList={topRateMovies.results}  genres={genresMapList}/>
      <AllGenresList genres={genresList}/>
    </main>
  );
};

export default Home;