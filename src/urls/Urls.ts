const baseUrl = 'https://api.themoviedb.org/3'
export const apiUrls = {
  auth: {
    guest: baseUrl+'/authentication/guest_session/new',
  },

  movie: {
    base: baseUrl+'/movie',
    topRated: baseUrl+'/movie/top_rated',
  },

  trending: {
    day: baseUrl+'/trending/movie/day',
    week: baseUrl+'/trending/movie/week',
  },

  discover: {
    movie: baseUrl+'/discover/movie',
  },

  genre: {
    moviesList: baseUrl+'/genre/movie/list',
  }
};

export const imagesUrl = {
  "base_url": "https://image.tmdb.org/t/p/",
  "backdrop_sizes": [
    "w300",
    "w780",
    "w1280",
    "original"
  ],
  "logo_sizes": [
    "w45",
    "w92",
    "w154",
    "w185",
    "w300",
    "w500",
    "original"
  ],
  "poster_sizes": [
    "w92",
    "w154",
    "w185",
    "w342",
    "w500",
    "w780",
    "original"
  ],
  "profile_sizes": [
    "w45",
    "w185",
    "h632",
    "original"
  ],
  "still_sizes": [
    "w92",
    "w185",
    "w300",
    "original"
  ]
}

export default baseUrl;

