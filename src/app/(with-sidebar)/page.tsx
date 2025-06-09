import React from 'react';
import TopRatedMovies from "@/components/top-rated-movies/TopRatedMovies";
import apiService from "@/services/api.service";

const Home = async () => {

  const topRateMovies =await apiService.movie.topRated()

  return (
    <div>
      <TopRatedMovies moviesListProps={topRateMovies}/>
    </div>
  );
};

export default Home;