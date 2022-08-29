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
      <header className='pokeball'>
        <img src='https://i.pinimg.com/564x/f1/7b/f9/f17bf97a2fd56e60dead65d5521a8a09.jpg'/>
        <img src='https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Symbol.jpg'/>
      </header>
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