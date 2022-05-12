import {apiKey, API_URL} from './settings'

export default function getTrendingGifs({keyword = 'Morty'} = {}) {
    const API = `${API_URL}trending/searches?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
    
    return fetch(API)
      .then(res => res.json())
      .then(response => {
      const {data = []} = response;
      return data
    })
}