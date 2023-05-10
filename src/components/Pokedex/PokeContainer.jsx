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
  const itemsPerPage = 9

  useEffect(() => {
    getAllPokemons()
    setTotalPage(Math.ceil(1281 / itemsPerPage))
    // setLoading(false)
  }, [formUrl])

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className='pokeContainer__body'>
      <div className='poke__paginate'>
        <ReactPaginate
          pageCount={totalPage}
          onPageChange={handlePageChange}
          forcePage={currentPage}
          containerClassName='pagination-container'
          activeLinkClassName='active-page'
          pageClassName='active-pageli'
          previousClassName='active-pageli'
          nextClassName='active-pageli'
          breakLabel={'...'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          disabledClassName='disabled-page'
          renderOnZeroPageCount={null}
          previousLabel='<<'
          nextLabel='>>'
        />
      </div>
      <div className='poke__cards'>
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
    </div>
  )
}

export default PokeContainer