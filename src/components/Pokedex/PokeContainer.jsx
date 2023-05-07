import React, { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import PokeCard from './PokeCard'
// import Loading from '../../pages/Loading'
import ReactPaginate from 'react-paginate'
import './styles/pokeContainer.css'

const PokeContainer = ({ formUrl }) => {

  const [pokemons, getAllPokemons] = useFetch(formUrl)
  // const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPage, setTotalPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    getAllPokemons()
    setTotalPage(Math.ceil(1281 / itemsPerPage ))
    // setLoading(false)
  }, [formUrl])

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className='poke__container'>
      <ReactPaginate
        pageCount={totalPage}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        containerClassName={"pagination-container"}
        activeClassName={"active-page"}
        pageClassName={'active-pageli'}
        previousClassName={'active-pageli'}
        nextClassName={'active-pageli'}

      />
      {
        pokemons?.results
          ? (
            pokemons?.results.slice(startIndex, endIndex).map(pokemon => (
              <PokeCard
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          )
          : (
            pokemons?.pokemon.slice(startIndex, endIndex).map(poke => (
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