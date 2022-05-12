import {apiKey, API_URL} from './settings'

const fromApiResponse = (apiResponse) => {
    const {data} = apiResponse
    const {title, id, images} = data
    const {url} = images.downsized_medium
    return {title, id, url}

}

export default function getSingleGif ({id}) {
    return fetch(`${API_URL}gifs/${id}?api_key=${apiKey}`)
        .then(res => res.json())
        .then(fromApiResponse)
}