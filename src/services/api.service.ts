import {apiUrls} from "@/urls/Urls";
import apiRequest from "@/helpers/api-helper";
import {IGenre, IGenres} from "@/model/IGenres";
import {IMoviesResponse} from "@/model/IMoviesResponse";
import {IMovieFull} from "@/model/IMovieFull";


type AuthType = {
  success: boolean;
  session_id: string;
}

const apiService = {
  auth: {
    guest: async ():Promise<AuthType> => {
      return await apiRequest<AuthType>('POST', apiUrls.auth.guest)

    }
  },

  movie: {
    trending: async (page:number = 1, lang:string = 'en-US'):Promise<IMoviesResponse> => {
      const urlParams = `?language=${lang}&page=${page}`;
      return await apiRequest<IMoviesResponse>('GET', apiUrls.trending.day + urlParams)
    },

    byGenre: async (genre:string, page:number = 1, lang:string = 'en-US', region:string | null = null):Promise<IMoviesResponse> => {
      const urlParams = `?with_genres=${genre}&language=${lang}&page=${page}` + (region !== null ? `&region=${region}` : '');
      return await apiRequest<IMoviesResponse>('GET', apiUrls.discover.movie + urlParams)
    },

    details: async (id:string, lang:string = 'en-US'):Promise<IMovieFull> => {
      const urlParams = `?language=${lang}`;
      return await apiRequest<IMovieFull>('GET', apiUrls.movie.base + '/'+id + urlParams)
    }
  },

  tv: {

  },

  genre: {
    movieGenresList: async (lang:string = 'en-US'):Promise<IGenre[]> => {
      const urlParams = `?language=${lang}`;
      return (await apiRequest<IGenres>('GET', apiUrls.genre.moviesList + urlParams)).genres;
    }
  }
};

export default apiService;
