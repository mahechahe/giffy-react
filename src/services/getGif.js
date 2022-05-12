import {apiKey, API_URL} from './settings'

export default function getGifs({limit = 5, keyword = 'Morty', page = 0} = {}) {
    const API = `${API_URL}gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;
    
    return fetch(API)
      .then(res => res.json())
      .then(response => {
        const {data} = response;
        if(Array.isArray(data)){
          const gifs = data.map(image =>  {
              const {title, id, images} = image
              const {url} = images.downsized_medium
              return {title, id, url}
            })
          return gifs
        }
    })
}