import axios from 'axios'
import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import PokeCard from './PokeCard'
import SearchBars from './SearchBars'


const Pokedex = () => {
  const [pokemons, setPokemons]= useState()
  const [pokeSearch, setPokeSearch] = useState()
  const nameTrainer = useSelector(state=> state.nameTrainer)
  

  useEffect(() => {

    if(pokeSearch){
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results:[
          {
            url
          }
        ]
      }
      setPokemons(obj)
    }else{
      URL= 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err =>  console.log(err))
    }

  }, [pokeSearch])
  console.log("desde pokemons",pokemons)
  console.log("desde pokeSearch", pokeSearch)
  
  
  return (
    <div  className='pokedex'>
      <header className='pokeball'>
        <img src='https://i.pinimg.com/564x/f1/7b/f9/f17bf97a2fd56e60dead65d5521a8a09.jpg'/>
        <img src='https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Symbol.jpg'/>
        <p>Hola, {nameTrainer}</p>
      </header>
      <SearchBars setPokeSearch={setPokeSearch}/>
      <div className="cards-container">
        {
          pokemons?.results.map(pokemon =>(
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