import axios from 'axios'
import {useState, useEffect}from 'react'
import StatPokemon from './StatPokemon'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({URL}) => {

    const[pokemon, setPokemon] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(URL)
        .then(res => {
            setPokemon(res.data)
        })
        .catch(err => console.log(err))

    }, [URL])

    console.log("desde pokemon",pokemon)

    const handleClick = () => navigate(`/pokedex/${pokemon.name}`)
    
  return (
    <div className={`card bg_${pokemon?.types[0].type.name}`} onClick={handleClick}>
        <div className="img_pokemon">
            <img src={pokemon?.sprites.other['official-artwork']['front_default']} alt={pokemon?.name} />
            
        </div>
        <section className='body_card'>
            <h2 className={`text_${pokemon?.types[0].type.name}`}>{pokemon?.name.toUpperCase()}</h2>
            <div>
                {
                    pokemon?.types.map(slot =>(
                        <span key={slot.type.url}>
                            {slot.type.name }/
                        </span>
                    ))
                }
            </div>
            <h3>Tipo</h3>
        </section>
        <footer>
            <ul>
                {
                    pokemon?.stats.map(stat =>(
                        <StatPokemon
                            key={stat.url}
                            infoStat ={stat}
                        />
                    ))
                }
            </ul>
        </footer>

    </div>
  )
}

export default PokeCard