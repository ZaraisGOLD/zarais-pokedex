import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/pokeInfo.css'

const PokeInfo = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [pokemon, getPokeByName, hasError] = useFetch(url)

  useEffect(() => {
    getPokeByName()
  }, [name])

  return (
    <div className='pokeInfo'>
      {
        hasError
          ? <div className='pokemon__error'>
            <h1 className='pokemon__errorH1'><img className='pokemon__errorImg' src="/Pikachu Mejorado.png" alt="" />This pokemon not exist!</h1>
          </div>
          : <>
            <div className='poke__info--container'>
              <article className={`poke__info border-${pokemon?.types[0].type.name}`}>
                <header className={`poke__header bg-${pokemon?.types[0].type.name}`}>
                  <img className='poke__sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                </header>
                <section className='poke__body'>
                  <h3 className={`poke__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
                  <div className={`poke__hr hr-${pokemon?.types[0].type.name}`}></div>
                  <ul className='poke__types'>
                    {
                      pokemon?.types.map(type => (
                        <li className='poke__types--specific' key={type.type.url}>{type.type.name}
                          <img className='poke__types--img' src={`./${type.type.name}.png`} alt="" />
                        </li>
                      ))
                    }
                  </ul>
                  <div className='poke__data'>
                    <div className='poke__data--container'>
                      <span className='poke__data--title'>Weight</span>
                      <span className={`poke__data--value color-${pokemon?.types[0].type.name}`}>{pokemon?.weight}</span>
                    </div>
                    <div className='poke__data--container'>
                      <span className='poke__data--title'>Height</span>
                      <span className={`poke__data--value color-${pokemon?.types[0].type.name}`}>{pokemon?.height}</span>
                    </div>
                  </div>
                  <ul className='poke__stats'>
                    {
                      pokemon?.stats.map(stat => (
                        <li className='poke_stats--specific' key={stat.stat.url}>
                          <span className='poke__stats--label'>{stat.stat.name}</span>
                          <span className={`poke__stats--value color-${pokemon?.types[0].type.name}`}>{stat.base_stat}</span>
                        </li>
                      ))
                    }
                  </ul>
                  <ul className='poke__moves'>
                    <h3 className='poke__moves--title'>Moves</h3>
                    <div className='poke__moves--specific'>
                      {
                        pokemon?.moves.map(move => (
                          <li className='poke__move' key={move.move.url}>
                            <span>{move.move.name}</span>
                          </li>
                        ))
                      }
                    </div>
                  </ul>
                </section>
              </article>
            </div>
          </>
      }
    </div>
  )
}

export default PokeInfo