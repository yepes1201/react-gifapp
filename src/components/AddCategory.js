import React, { useState } from 'react'

export const AddCategory = (props) => {
    const { onAdd } = props
    const [inputValue, setInputValue] = useState('')

    function handleInputChange(e) {
        const { value } = e.target
        setInputValue(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (inputValue !== '') {
            onAdd(prevValue => [inputValue, ...prevValue,])
            setInputValue('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Type a category...'
                    value={inputValue}
                />
            </form>
        </div>
    )
}
