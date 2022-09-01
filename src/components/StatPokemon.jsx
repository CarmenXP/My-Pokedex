import React from 'react'

const StatPokemon = ({infoStat, color}) => {
  return (
    <li>
        <h4 className={color}>{infoStat.stat.name}</h4>
        <p>{infoStat.base_stat}</p>
    </li>
  )
}

export default StatPokemon