import {apiUrls} from "@/urls/Urls";
import apiRequest from "@/helpers/api-helper";
import {ITopRated} from "@/model/ITopRated";
import {IGenres} from "@/model/IGenres";

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
    topRated: async (page:number = 1, lang:string = 'en-US', region:string | null = null) => {
      const urlParams = `?language=${lang}&page=${page}` + (region !== null ? `&region=${region}` : '');
      return await apiRequest<ITopRated>('GET', apiUrls.movie.topRated + urlParams)
    }
  },

  tv: {

  },

  genre: {
    movieMapList: async (lang:string = 'en-US'):Promise<Map<number, string>> => {
      const urlParams = `?language=${lang}`;
      const {genres} = await apiRequest<IGenres>('GET', apiUrls.genre.moviesList + urlParams);
      return new Map<number, string>(genres.map(genre => [genre.id, genre.name]));
    }
  }
};

export default apiService;
