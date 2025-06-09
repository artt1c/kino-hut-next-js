import {apiUrls} from "@/urls/Urls";
import apiRequest from "@/helpers/api-helper";
import {ITopRated} from "@/model/ITopRated";

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

  }
};

export default apiService;
