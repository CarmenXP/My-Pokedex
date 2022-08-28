import axios from 'axios'
import {useState, useEffect}from 'react'
import StatPokemon from './StatPokemon'

const PokeCard = ({URL}) => {

    const[pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(URL)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))

    }, [])

    console.log(pokemon)
    
  return (
    <div className='card'>
        <div className="img_pokemon">
            <img src={pokemon?.sprites.other['official-artwork']['front_default']} alt={pokemon?.name} />
        </div>
        <section className='body_card'>
            <h3>P{pokemon?.name}</h3>
            <ul>
                {
                    pokemon?.types.map(slot =>(
                        <li key={slot.type.url}>{slot.type.name}</li>
                    ))
                }
            </ul>
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