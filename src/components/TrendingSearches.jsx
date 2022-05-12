import React, {Suspense, lazy } from 'react'
import '../styles/Category.css'
import { useNearScreen } from '../hooks/useNearScreen';


const TrendingSearches = lazy(
  () => import('./TrendingSuspense')
)


export default function LazyTrending () {
  const {isNearScreen, elementRef} = useNearScreen()

  return <div className='LazyTrending' ref={elementRef}>
      <Suspense fallback={'Estoy cargando...'}>
        {isNearScreen ? <TrendingSearches></TrendingSearches> : 'Cargando...'}
      </Suspense>
    </div>
} 
