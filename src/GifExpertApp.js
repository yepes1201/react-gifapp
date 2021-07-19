import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export function GifExpertApp() {

    const [categories, setCategories] = useState([])

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory onAdd={setCategories} />
            <hr />
            {categories.length === 0 && <p className='look-advice'>Look for something up there!</p>}
            <ol>
                {categories.length !== 0 ? (categories.map((cate, i) => {
                   return <GifGrid key={cate} category={cate} />
                })) : null}
            </ol>
        </div>
    )
}