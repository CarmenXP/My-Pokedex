import axios from 'axios'
import React, { useState, useEffect } from 'react'

const SearchBars = ({setPokeSearch, setOptionType, optionType}) => {

    const [listItems, setListItems] = useState()

    useEffect(() => {
        const URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
        .then(res => setListItems(res.data.results))
        .catch(err => console.log(err))
    }, [])
    

    const handleSubmit = e=>{
        e.preventDefault()
        setPokeSearch(e.target.searchInput.value.trim().toLowerCase())
        setOptionType('All')  
        e.target.searchInput.value = ''
    }

    const handleChange = e =>{
        setOptionType(e.target.value)
        setPokeSearch('')
    }
  return (
    <div className='content_searches'>
        <div className="searches">
            <form className="search-bar" onSubmit={handleSubmit}>
                <input type ='text' placeholder='Enter a Pokemon'  id='searchInput'/>
                <button><i className='bx bx-search-alt'></i></button>
            </form>
            <div className="select_pokemon">
                <select  value={optionType} onChange={handleChange}>
                    <option value='All'>All</option>
                    {
                        listItems?.map(item =>(
                            <option key={item.name} value={item.name}>{item.name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    </div>
  )
}

export default SearchBars