import React, { useCallback } from 'react'
import { useLocation } from 'wouter'
import Gif from '../components/Gif'
import { useGifs } from '../hooks/useGifs'
import '../styles/Home.css'
import LazyTrending from '../components/TrendingSearches'
import SearchForm from '../components/SearchForm'
import {Helmet} from 'react-helmet';



export const Home = () => {
  const [path, pushLocation] = useLocation()
  const {gifs, loading} = useGifs()

  const handleSubmit = useCallback(({keyword}) => {
    //Navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  return (
    <div className='home-container'>
        <Helmet>
          <title>Home | Giffy</title>
        </Helmet>
        <SearchForm onSubmit={handleSubmit}></SearchForm>
        <h3 className='title-search'>Ultima busqueda</h3>
        <div className='lastSerach-container'>
          {
            gifs.map(singleGif => (
              <Gif key={singleGif.id} singleGif={singleGif}></Gif>
            ))
          }
        </div>
        <h3>Trendings</h3>
        <LazyTrending></LazyTrending>
    </div>
  )
}
