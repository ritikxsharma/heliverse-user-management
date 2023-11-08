import '../assets/styles/_searchBar.scss'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage, setSearchQuery } from '../redux/actions/userActions'

const SearchBar = () => {

  const dispatch = useDispatch()

  const handleSearch = (e) =>{
    dispatch(setSearchQuery(e.target.value))
    dispatch(setCurrentPage(1))
  }

  return (
    <div className='search-bar'>
      <span class="material-symbols-outlined">
        search
      </span>
      <input 
        type="text"
        placeholder='search users'
        onChange={handleSearch}
      />
    </div>
  )
}

export default SearchBar