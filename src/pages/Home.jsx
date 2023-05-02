import React from 'react'
import FormNameUser from '../components/Home/FormNameUser'

const Home = () => {
  return (
    <div>
      <h1>POKEDEX</h1>
      <h2>Hi trainer!</h2>
      <p>Please give us your name to start</p>
      <FormNameUser />
    </div>
  )
}

export default Home