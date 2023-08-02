const baseUrl = process.env.REACT_APP_BASEURL;
const token = process.env.REACT_APP_TOKEN;
const apiKey = process.env.REACT_APP_APIKEY;

export const getListMovie = async () => {
  try{
    const options={
      method:'GET',
      headers: {
        accept: "application/json",
        Authorization:`Bearer ${token}`
      }
    }
    const response = await fetch(`${baseUrl}/movie/popular`, options);
    return response.json()
  }
  catch(error){
    console.error(error);
    return error
  }
}


export const searchMovies = async (keyword) =>{
  const options={
    method:'GET',
    headers: {
      accept: "application/json",
      Authorization:`Bearer ${token}`
    }
  }

  let isSearch = keyword!=='' ? `/search/movie?api_key=${apiKey}&query=${keyword}` : '/movie/popular';
  const response = await fetch(`${baseUrl}${isSearch}`, options);
  return response.json()
}
