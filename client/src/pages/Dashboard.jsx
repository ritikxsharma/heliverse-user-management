import '../assets/styles/_dashboard.scss'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from '../requests/requests'
import { setUsers } from '../redux/actions/userActions';
import SearchBar from '../components/SearchBar';
import UsersList from '../components/UsersList';
import Filtering from '../components/Filtering';
import Pagination from '../components/Pagination';

const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    async function fetchUsers(){
      const response = await getUsers()
      dispatch(setUsers(response.data))  
    }
    fetchUsers()
  }, [dispatch])
  return (
    <div className='dashboard'>
      <div className="search">
        <SearchBar></SearchBar>
        <Filtering></Filtering>
      </div>
      <div className="users">
        <UsersList></UsersList>
      </div>
      <div className="pages">
        <Pagination></Pagination>
      </div>
    </div>
  )
}

export default Dashboard