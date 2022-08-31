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
          <h1 className={`text_${pokeInfo?.types[0].type.name}`}>{pokeInfo?.name.toUpperCase()}</h1>
          <ul className='poke_list'>
            <li>
              <span>{pokeInfo?.weight}</span>
              <h3 className={`text_${pokeInfo?.types[0].type.name}`}>Weight</h3>
            </li>
            <li>
              <span>{pokeInfo?.height}</span>
              <h3 className={`text_${pokeInfo?.types[0].type.name}`}>Height</h3>
            </li>
          </ul>
          
          <ul className='poke_list'>
            <li>
              <h3 className={`text_${pokeInfo?.types[0].type.name}`}>Type</h3>
              {
                pokeInfo?.types.map(x =>(
                  <span key={x.type.name}>{x.type.name }</span>
                ))
              }
            </li>
          </ul>
          <ul className='poke_list'>
            <li>
              <h3 className={`text_${pokeInfo?.types[0].type.name}`}>Abilities</h3>
              {
                pokeInfo?.abilities.map(x =>(
                  <span key={x.ability.name}>{x.ability.name }</span>
                ))
              }
            </li>
          </ul>
        </div>
        <div className="poke_stats">
          <h2 className={`text_${pokeInfo?.types[0].type.name}`}>STATS</h2>
          {
            pokeInfo?.stats.map(x =>(
              <div className='progress_bar'>
                <label htmlFor={x.stat.name}><strong>{x.stat.name}</strong></label>
                <progress className='progress' id={x.stat.name} max="150" value={x['base_stat']}>{x['base_stat']}</progress>
              </div>
         
            ))
          }
        </div>
        <h2 className={` move text_${pokeInfo?.types[0].type.name}`}>MOVES</h2>
        <div className="poke_movements">
          
          <div className="moves"></div>
          {
            pokeInfo?.moves.map(x =>(
              <span>{x.move.name}</span>
            ))
            } 
        </div>
    </div>

  )
}

export default PokedexDetail