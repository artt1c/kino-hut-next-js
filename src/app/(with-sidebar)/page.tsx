import React from 'react';
import TopRatedMovies from "@/components/top-rated-movies/TopRatedMovies";
import apiService from "@/services/api.service";
import ApiService from "@/services/api.service";

const Home = async () => {

  const topRateMovies =await apiService.movie.topRated()
  const genresList = await ApiService.genre.movieMapList()

  return (
    <div>
      <TopRatedMovies moviesList={topRateMovies.results}  genres={genresList}/>
    </div>
  );
};

export default Home;