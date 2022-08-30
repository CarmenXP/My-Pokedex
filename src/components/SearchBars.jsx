import axios from 'axios'
import React, { useState, useEffect } from 'react'

const SearchBars = ({setPokeSearch}) => {

    const [listItems, setListItems] = useState()

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
        .then(res => setListItems(res.data.results))
        .catch(err => console.log(err))
    }, [])
    

    const handleSubmit = e=>{
        e.preventDefault()
        const inputValue = e.target.searchInput.value.trim().toLowerCase()
        setPokeSearch(inputValue)
        console.log(inputValue)
        
    }
  return (
    <div className='content_searches'>
    <div className="searches">
        <form className="search-bar" onSubmit={handleSubmit}>
            <input type ='text' placeholder='Enter a Pokemon'  id='searchInput'/>
            <button><i className='bx bx-search-alt'></i></button>
        </form>
        <div className="select_pokemon">
            <select>
                <option value='0'>All pokemons</option>
                <option value= '1'>0</option>
            </select>
        </div>
    </div>
</div>
  )
}

export default SearchBars