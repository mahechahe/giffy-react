import { useEffect, useState } from "react";
import getSingleGif from "../services/getSingleGif";
import { useGifs } from "./useGifs";

export default function useSingleGif({id}){
    const {gifs} = useGifs()
    const gitFromCache = gifs.find(singleGif => singleGif.id === id)

    const [gif, setGif] = useState(gitFromCache)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if(!gif){
            setIsLoading(true)
            getSingleGif({id})
                .then(gif => {
                    setGif(gif)
                    setIsLoading(false)
                }).catch(err => {
                    setIsLoading(false)
                    setIsError(true)
                })
        }
    }, [gif, id])

    return {gif, isLoading, isError}
}