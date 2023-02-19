import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  // on the axios request, we request over the base url, adding to it the url string that we get as a param
  export const fetchFromAPI = async (url)=> {
    // const {data} = destructure the data from the response
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)

    return data
  }