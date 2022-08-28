import axios from 'axios'
import {useEffect, useState} from 'react'
import PokeCard from './PokeCard'


const Pokedex = () => {
  const [pokemons, setPokemons]= useState()

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/pokemon'
    axios.get(URL)
    .then(res => setPokemons(res.data.results))
    .catch(err =>  console.log(err))
  }, [])
  console.log(pokemons)
  return (
    <div className='pokedex'>
      <h1>Pokedex</h1>
      <div className="cards-container">
        {
          pokemons?.map(pokemon =>(
            <PokeCard
              key = {pokemon.name}
              URL = {pokemon.url}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Pokedex