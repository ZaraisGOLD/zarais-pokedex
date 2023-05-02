import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const FormPoke = ({ setFormUrl, urlMain }) => {

  const inputPoke = useRef()

  const navigate = useNavigate()

  const url = 'https://pokeapi.co/api/v2/type/'
  const [types, getTypes] = useFetch(url)

  useEffect(() => {
    getTypes()
  }, [])


  const handleSubmit = e => {
    e.preventDefault()
    const path = `/pokedex/${navigate(inputPoke.current.value.trim().toLowerCase())}`
    navigate(path)
  }

  const handleChange = e => {
    setFormUrl(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputPoke} type="text" />
        <button>Search</button>
      </form>
      <select onChange={handleChange}>
        <option value={urlMain}>All Pokemons</option>
        {
          types?.results.map(type => (
            <option
              key={type.url}
              value={type.url}
            >{type.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default FormPoke