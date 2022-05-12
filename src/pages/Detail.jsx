import React from 'react'
import Gif from '../components/Gif.jsx';
import useSingleGif from '../hooks/useSingleGif.js';
import XYChart from '../components/Spinner.jsx';
import { Redirect } from 'wouter';
//import useSeo from '../hooks/useSeo.js';
import {Helmet} from 'react-helmet';


export const Detail = ({params}) => {
  const {gif, isLoading, isError} = useSingleGif({id: params.id})
  const title = gif ? gif.title : ''
  //useSeo({title, description: `Detail of ${title}`})

  if(isLoading){ 
    return ( 
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <XYChart></XYChart>
      </>
  )}
  
  if (isError) return <Redirect to='/404'></Redirect>
  if(!gif) return null
  
  return (
    <>
      <Helmet>
        <title>{title} || Giffy</title>
      </Helmet>
      <Gif singleGif={gif}></Gif>
    </>
  )
}
