import React from 'react'

export const GifGridItem = (props) => {
    const { title, gif } = props
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={gif} alt={title} />
            {/* <p>{title}</p> */}
        </div>
    )
}
