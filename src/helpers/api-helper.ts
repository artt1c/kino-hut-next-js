const apiRequest = async <T>(method:string, url:string):Promise<T> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  const options:RequestInit = {
    method: method,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization:  'Bearer ' + process.env.API_KEY
    },
    signal: controller.signal,
    cache: 'GET' === method? 'force-cache' : 'default'
  }

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return  res.json();
  } catch (e) {
    console.error(e)
    throw e;
  } finally {
    clearTimeout(timeout);
  }
}

export default apiRequest;