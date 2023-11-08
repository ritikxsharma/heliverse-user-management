import '../assets/styles/_userCard.scss'
import React from 'react'

const UserCard = ({user, onClick}) => {

  const handleCardClick = () =>{
    if(onClick){
      onClick(user)
    }
  }

  return (
    <div className='user-card' onClick={handleCardClick}>
        <div className="avatar">
          <img src={user.avatar} alt={user.name}></img>
        </div>
        <div className="user-details">
          <h3>{user.first_name} {user.last_name}</h3>
          <h4>{user.gender}</h4>
          <p>Email: {user.email}</p>
          <p>Domain: {user.domain}</p>
          <p>Availability: {user.available === true ? 'Avaiable' : 'Not Avaiable'}</p>
        </div>
    </div>
  )
}

export default UserCard