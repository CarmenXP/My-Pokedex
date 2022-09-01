import axios from 'axios'
import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import PokeCard from './PokeCard'
import SearchBars from './SearchBars'


const Pokedex = () => {

  const [pokemons, setPokemons]= useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')

  const nameTrainer = useSelector(state=> state.nameTrainer)

  useEffect(() => {

    if(optionType !== 'All'){
      const URL = `https://pokeapi.co/api/v2/type/${optionType}`
      axios.get(URL)
      .then( res =>{
        const arr = res.data.pokemon.map(e => e.pokemon)
        setPokemons({results:arr})
      })
      .catch(err => console.log(err))
    }else if(pokeSearch){
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results: [{url}]
      }
      setPokemons(obj)
    } else{
      const URL = 'https://pokeapi.co/api/v2/pokemon/'
      axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err => console.log(err))
    }


  }, [pokeSearch, optionType])
  console.log("desde pokemons",pokemons)
 // console.log("desde pokeSearch", pokeSearch)
  
  
  return (
    <div  className='pokedex'>
      <header className='pokeball'>
        <img src='https://i.pinimg.com/564x/f1/7b/f9/f17bf97a2fd56e60dead65d5521a8a09.jpg'/>
        <img src='https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Symbol.jpg'/>
        
      </header>
      <SearchBars setPokeSearch={setPokeSearch} setOptionType={setOptionType} optionType={optionType}/>
      <h1 className='name'>Hello, {nameTrainer}!</h1>
      <div className="cards-container">
        {
          pokemons?.results.map(pokemon =>(
            <PokeCard
              key = {pokemon.url}
              URL = {pokemon.url}
              
            />
          ))
        }
      </div>

    </div>
  )
}

export default Pokedex