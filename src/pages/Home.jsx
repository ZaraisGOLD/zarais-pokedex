import React from 'react'
import FormNameUser from '../components/Home/FormNameUser'
import './styles/home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__title'>
          <img src="Pokedex 3D.png" alt="title" />
        </div>
        <h2 className='home__greeting'>Hi Trainer!</h2>
        <p className='home__text'>Please, give us your name to start</p>
        <div className='home__mainImg'>
          <img src="./Ash.png" alt="" />
        </div>
        <FormNameUser />
        <div className='home__footerImg'>
          <img src="./Pokemones.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home