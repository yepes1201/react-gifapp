import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGift } from '../hooks/useFetchGifs'

export const GifGrid = (props) => {
    const { category } = props
    const { data: gifs, isLoading } = useFetchGift(category);
    return (
        <div>
            <h3 className='category'>{category}</h3>
            <div className='card-grid'>
                {!isLoading ? (gifs.map((gif) => {
                    return <GifGridItem
                        key={gif.id}
                        title={gif.title}
                        gif={gif.gif}
                        user={gif.user}
                    />
                })) : <h1>Loading...</h1>}
            </div>
        </div>
    )
}
