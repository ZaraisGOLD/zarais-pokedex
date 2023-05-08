import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/pokeCard.css'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ url }) => {

  const [pokemon, getPokeById] = useFetch(url)

  useEffect(() => {
    getPokeById()
  }, [])

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.name}`)
  }

  return (
    <article onClick={handleClick} className={`pokemon border-${pokemon?.types[0].type.name}`}>
      <header className={`pokemon__header bg-${pokemon?.types[0].type.name}`}>
        <img className='pokemon__sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className='pokemon__body'>
        <h3 className={`pokemon__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <ul className='pokemon__types'>
          {
            pokemon?.types.map(type => (
              <li className='pokemon__types--specific' key={type.type.url}>{type.type.name}
              <img className='pokemon__types--img' src={`./${type.type.name}.png`} alt="" />
              </li>
            ))
          }
        </ul>
        <div className={`pokemon__hr hr-${pokemon?.types[0].type.name}`}></div>
        <ul className='pokemon__stats'>
          {
            pokemon?.stats.map(stat => (
              <li className='pokemom__stats--specific' key={stat.stat.url}>
                <span className='pokemon__stats--label'>{stat.stat.name}</span>
                <span className={`pokemon__stats--value color-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard