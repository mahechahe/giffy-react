import React, {useEffect, useRef, useCallback} from 'react'
import Gif from './Gif';
import '../styles/ListOfGifs.css'
import { useGifs } from '../hooks/useGifs';
import XYChart from './Spinner'
import { useNearScreen } from '../hooks/useNearScreen';
import debounce from 'just-debounce-it';
import useSeo from '../hooks/useSeo';
import {Helmet} from 'react-helmet';



export const ListOfGifs = ({params}) => {
  const {keyword} = params
  const {loading, gifs, setPages} = useGifs({keyword})
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({distance : '60px',externalRef: loading ? null : externalRef, once: false})

  const title = gifs 
  ? `${gifs.length} Resultados de ${keyword}` 
  : loading ? 'Cargando...' : ''
  useSeo({title})


  //const handleNextPage = () => setPages(prevPage => prevPage + 1)
  const debounceHandleNextPage = useCallback(debounce(
    () => setPages(prevPage => prevPage + 1), 200
  ), [setPages])

  useEffect(() => {
    console.log(isNearScreen);
    if(isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])
  

  if (loading) return <XYChart></XYChart>
  
    return (  
    <>
    <Helmet>
      <title>{title}</title>
      <meta name='description'
      content={title}></meta>
      <meta name="rating" content="General"></meta>
    </Helmet>
      <div className='gif--container'>
          {
              gifs.map(singleGif => (
                <Gif key={singleGif.id} singleGif={singleGif}></Gif>
              ))
          }
          <div id='visor' ref={externalRef}></div>
      </div>
    </>
  )
}
