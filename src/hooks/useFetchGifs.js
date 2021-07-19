import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGift = (category) => {
    const [state, setState] = useState({
        data: [],
        isLoading: true
    })

    useEffect(() => {
        getGifs(category).then(gifs => {
            setState({
                data: gifs,
                isLoading: false
            })
        })
    }, [category])

    return state;
}