import {apiUrls} from "@/urls/Urls";

type AuthType = {
  success: boolean;
  session_id: string;
}

const apiService = {
  auth: {
    guest: async ():Promise<AuthType> => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization:  'Bearer ' + process.env.API_KEY
        },
        signal: controller.signal
      }
      try {
        const res = await fetch(apiUrls.auth.guest, options);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return  res.json();
      } catch (e) {
        console.error(e)
        throw e;
      } finally {
        clearTimeout(timeout);
      }
    }
  }
};

export default apiService;
