import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormPoke from '../components/Pokedex/FormPoke'
import PokeContainer from '../components/Pokedex/PokeContainer'
import './styles/pokedex.css'

const Pokedex = () => {

  const urlMain = 'https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0'

  const [formUrl, setFormUrl] = useState(urlMain)

  const { trainerName } = useSelector(state => state)

  console.log(formUrl);

  return (
    <div className='pokedex'>
      <div className='pokedex__title'><img src="Pokedex 3D.png" alt="title" /></div>
      <p className='pokedex__welcome'><span className='pokedex__name'>Welcome {trainerName}!</span></p>
      <FormPoke
        setFormUrl={setFormUrl}
        urlMain={urlMain}
      />
      <PokeContainer
        formUrl={formUrl}
      />
    </div>
  )
}

export default Pokedex