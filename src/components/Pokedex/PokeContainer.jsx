import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import PokeCard from './PokeCard'

const PokeContainer = ({ formUrl }) => {

  const [pokemons, getAllPokemons] = useFetch(formUrl)

  useEffect(() => {
    getAllPokemons()
  }, [formUrl])

  return (
    <div className='poke__container'>
      {
        pokemons?.results
          ? (
            pokemons?.results.map(pokemon => (
              <PokeCard
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          )
          : (
            pokemons?.pokemon.map(poke => (
              <PokeCard
                key={poke.pokemon.url}
                url={poke.pokemon.url}
              />
            ))
          )
      }
    </div>

  )
}

export default PokeContainer