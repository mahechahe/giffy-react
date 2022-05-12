import { useEffect, useState, useContext } from "react";
import getGifs from "../services/getGif";
import GifsContext from '../context/GifsContexts.js';

const INITIAL_PAGE = 0;

const useGifs = ({keyword} = {keyword: null}) => {
    const {gifs, setGifs} = useContext(GifsContext)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPages] = useState(INITIAL_PAGE)
    const [loading, setLoading] = useState(false)
  
    const keyworToUse = keyword || localStorage.getItem('Lastkeyword') || 'random'

    useEffect(() => {
      setLoading(true)


      getGifs({keyword: keyworToUse}).then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('Lastkeyword', keyword)
      })
    }, [keyword, keyworToUse, setGifs])

    useEffect(() => {
      if(page === INITIAL_PAGE) return
      setLoadingNextPage(true)
      getGifs({keyword: keyworToUse, page})
        .then(nextGifs => {
          setGifs(prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(false)
        })
    }, [page, keyworToUse, setGifs])

    return {loading, gifs, setPages, loadingNextPage}
}

export {useGifs}