import axios from 'axios'
import {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'

const PokedexDetail = () => {
 const [pokeInfo, setPokeInfo] = useState()

 useEffect(() => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
  axios.get(URL)
  .then(res =>  setPokeInfo(res.data))
  .catch(err => console.log(err))
 }, [])
 console.log("desde pokeInfo ",pokeInfo)
 
  const {name} = useParams()

  return (
    <div className="detail_container">
        <div className='poke_detail'>
          
          <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt=""  />
          <h1>{pokeInfo?.name.toUpperCase()}</h1>
          <ul>
            <li>
              <span>{pokeInfo?.weight}</span>
              <h3>Weight</h3>
            </li>
            <li>
              <span>{pokeInfo?.height}</span>
              <h3>Height</h3>
            </li>
          </ul>
          
          <ul>
            <li>
              <h3>Type</h3>
              {
                pokeInfo?.types.map(x =>(
                  <span key={x.type.name}>{x.type.name }</span>
                ))
              }
            </li>
          </ul>
          <ul>
            <li>
              <h3>Abilities</h3>
              {
                pokeInfo?.abilities.map(x =>(
                  <span key={x.ability.name}>{x.ability.name }</span>
                ))
              }
            </li>
          </ul>
        </div>
    </div>

  )
}

export default PokedexDetail