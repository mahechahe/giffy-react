import { Link } from 'wouter'
import React from 'react'
import '../styles/Gif.css'

const Gif = ({singleGif}) => {

  return (
    <Link to={`/gif/${singleGif.id}`}>
      <a className='anchor' href={singleGif.id}>
          <img className='image--giff' src={singleGif.url} alt={singleGif.title}></img>
          <h4>{singleGif.title}</h4>
      </a>
    </Link>
  )
}

export default React.memo(Gif)
