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

  console.log(pokemon);

  return (
    <div>
      {
        hasError
          ? <div className='pokemon__error'>
            <h1><img className='pokemon__errorImg' src="https://pm1.narvii.com/6706/03db65a4afca1570ffcc2bc338a5873c1716af44_00.jpg" alt="" />This pokemon not exist!</h1>
          </div>
          : <>
            <div className='pokemon__info--container'>
              <article className={`pokemon border-${pokemon?.types[0].type.name}`}>
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
            </div>
          </>
      }
    </div>
  )
}

export default PokeInfo