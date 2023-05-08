import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './styles/formPoke.css'

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
    const path = `/pokedex/${inputPoke.current.value.trim().toLowerCase()}`
    navigate(path)
  }

  const handleChange = e => {
    setFormUrl(e.target.value)
  }

  return (
    <div className='form' >
      <form className='form__container' onSubmit={handleSubmit}>
        <input className='form__input' ref={inputPoke} type="text" />
        <button className='form__btn' >Search<img className='form__img' src="./Pokebola.png" alt="" /></button>
      </form>
      <select className='form__select' onChange={handleChange}>
        <option className='form__option' value={urlMain}>All Pokemons</option>
        {
          types?.results.map(type => (
            <option
              key={type.url}
              value={type.url}
              className='form__option'
            >{type.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default FormPoke