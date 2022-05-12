import {useState, useEffect} from "react";
import getTrendingGifs from '../services/getTrendingGif';
import { Category } from './Category';

const TrendingSearches = () => {
    const [trends, setTrends] = useState([]);
  
    useEffect(() => {
      getTrendingGifs().then(setTrends)
    }, [])
    
    return (
      <div className='div-container--tendencias'>
        <Category trends={trends}></Category>
      </div>
    )
}
export default TrendingSearches;