import '../assets/styles/_filtering.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDomainFilter, setGenderFilter, setAvailabilityFilter } from '../redux/actions/userActions'

const Filtering = () => {

    const users = useSelector((state) => state.users.users)
    const genderOptions = Array.from(new Set(users.map(user => user.gender)))
    const domainOptions = Array.from(new Set(users.map(user => user.domain)))
    const availabilityOptions = Array.from(new Set(users.map(user =>user.available))).map(available => available === true ? 'Available' : 'Not Available')
    
    const dispatch = useDispatch()

    const handleGenderFilter = (gender) =>{
      dispatch(setGenderFilter(gender))
    }

    const handleDomainFilter = (domain) =>{
      dispatch(setDomainFilter(domain))
    }

    const handleAvailabilityFilter = (availablility) =>{
      dispatch(setAvailabilityFilter(availablility))
    }

    const renderFilterOptions = (filterName, options) => {
      return (
        <div className={`${filterName}-filter`}>
          <p>{filterName}</p>
          <select 
            name={filterName}
            id={filterName}
            onChange={
              (e) => {
                if(filterName === 'Gender') handleGenderFilter(e.target.value)
                if(filterName === 'Domain') handleDomainFilter(e.target.value)
                if(filterName === 'Availability') handleAvailabilityFilter(e.target.value)
              }
            }
          >
            <option value="All">All</option>
            {
              options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))
            }

          </select>
        </div>
      )
    }

    return (
      <div className="filters">
        {
          renderFilterOptions('Gender', genderOptions)
        }
        {
          renderFilterOptions('Domain', domainOptions)
        }
        {
          renderFilterOptions('Availability', availabilityOptions)
        }
      </div>
    )
}

export default Filtering