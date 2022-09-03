import axios from 'axios'
import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination'
import PokeCard from './PokeCard'
import SearchBars from './SearchBars'

//https://pokeapi.co/api/v2/pokemon/
const Pokedex = () => {

  const [pokemons, setPokemons]= useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage,   setCardsPerPage] = useState(15)

  const nameTrainer = useSelector(state=> state.nameTrainer)
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const paginate = pageNumber => setCurrentPage(pageNumber)

  useEffect(() => {

    if(optionType !== 'All'){
      const URL = `https://pokeapi.co/api/v2/type/${optionType}`
      axios.get(URL)
      .then( res =>{
        const arr = res.data.pokemon.map(e => e.pokemon)
        setPokemons({results:arr})
        setCurrentPage(1)
      })
      .catch(err => console.log(err))
    }else if(pokeSearch){
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results: [{url}]
      }
      setPokemons(obj)
      setCurrentPage(1)
    } else{
      const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=60'
      axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err => console.log(err))
      setCurrentPage(1)
    }


  }, [pokeSearch, optionType])
  console.log("desde pokemons",pokemons)
 // console.log("desde pokeSearch", pokeSearch)
 console.log("página",currentPage)
  
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
          pokemons?.results.slice(indexOfFirstCard, indexOfLastCard).map(pokemon =>(
            <PokeCard
              key = {pokemon.url}
              URL = {pokemon.url}
              
            />
          ))
        }
      </div>
      {
        pokemons&&(
          <Pagination 
            cardsPerPage={cardsPerPage} 
            cards={pokemons.results}
            paginate = {paginate}
          />
        )
      }
      
      
    </div>
  )
}

export default Pokedex