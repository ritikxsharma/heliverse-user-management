import '../assets/styles/_usersList.scss'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard'
import { setTotalPages } from '../redux/actions/userActions'

const UsersList = () => {

    const dispatch = useDispatch()

    const users = useSelector((state) => state.users.users)
    const searchQuery = useSelector((state) => state.users.searchQuery)
    const genderFilter = useSelector((state) => state.users.genderFilter)
    const domainFilter = useSelector((state) => state.users.domainFilter)
    const availabilityFilter = useSelector((state) => state.users.availabilityFilter)
    const usersPerPage = useSelector((state) => state.users.usersPerPage)
    const currentPage = useSelector((state) => state.users.currentPage)

    const filteredUsers = useMemo(() => {
        const updatedUsersList = users.filter((user) => {
            const fullName = (user.first_name + ' ' + user.last_name)
                             .replace(/\s+/g, '').toLowerCase()
            const query = searchQuery.replace(/\s+/g, '').toLowerCase()
            console.log(availabilityFilter);
            if(!fullName.includes(query)) return false
            if(genderFilter !== 'All' && user.gender !== genderFilter)    return false
            if(domainFilter !== 'All' && user.domain !== domainFilter)    return false
            if(availabilityFilter !== 'All' && (user.available === true ? 'Available' : 'Not Available').toString() !== availabilityFilter)   return false
            
            return true
            
        })
        
        const totalPages = Math.ceil(updatedUsersList.length / usersPerPage)
        dispatch(setTotalPages(totalPages))

        return updatedUsersList
    }, [users, searchQuery, genderFilter, domainFilter, availabilityFilter])
   
    const [selectedUser, setSelectedUser] = useState(null)

    const handleSelectedUser = (user) =>{
        setSelectedUser(user)
    }

    const closeProfileCard = () =>{
        setSelectedUser(null)
    }

    return (
    <div className='users-list'>

        <div className={`users ${selectedUser ? 'inactive' : ''}`}>
            {
                filteredUsers.slice((currentPage - 1)*usersPerPage, currentPage * usersPerPage).map((user) => (
                    <UserCard 
                        key={user.id}
                        user={user}
                        onClick={() => handleSelectedUser(user)}
                    />
                ))
            }
        </div>
        
        {
            selectedUser && (
                <div className="profile-card">
                    <button onClick={closeProfileCard}>Close</button>
                    <div className="profile">
                        <div className="avatar">
                            <img src={selectedUser.avatar} alt='No Image' />
                        </div>
                        <div className="details">
                            <h3>{selectedUser.first_name} {selectedUser.last_name}</h3>
                            <p>Email: {selectedUser.email}</p>
                            <p>Domain: {selectedUser.domain}</p>
                            <p>Availability: {selectedUser.available === true ? 'Avaiable' : 'Not Avaiable'}</p>
                        </div>
                    </div>
                </div>
            )
        }
        
    </div>
    )
}

export default UsersList