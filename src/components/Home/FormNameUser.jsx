import React, { useRef } from 'react'
import { setTrainerName } from '../../store/slices/trainerName.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/formNameUser.css'

const FormNameUser = () => {

  const inputName = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerName(inputName.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <form onSubmit={handleSubmit} className='home__form'>
      <input className='home__input' ref={inputName} type="text" placeholder='Your name is ...' />
      <button className='home__button'>Start
        <span className='home__button--img'><img src="./Pokebola.png" alt="" /></span>
      </button>
    </form>
  )
}

export default FormNameUser