import '../assets/styles/_pagination.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../redux/actions/userActions'

const Pagination = () => {

  const dispatch = useDispatch()
  const totalPages = useSelector((state) => state.users.totalPages)
  const currentPage = useSelector((state) => state.users.currentPage)

  const handlePageChange = (newPage) =>{
    if(newPage !== currentPage){
      dispatch(setCurrentPage(newPage))
    }
  }

  const calculateVisibleRange = () =>{
    const maxVisibleButtons = 10
    const halfVisibleButtons = Math.floor(maxVisibleButtons / 2)

    let startPage = Math.max(1, currentPage - halfVisibleButtons)
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1)
    
    if(endPage === totalPages){
      startPage = Math.max(1, totalPages - maxVisibleButtons + 1)
    }
    if(startPage === 1){
      endPage = Math.min(totalPages, maxVisibleButtons)
    }

    return [startPage, endPage]
  }

  const renderPagesButtons = () =>{
    const [startPage, endPage] = calculateVisibleRange()
    const buttons = []

    if(startPage > 1){
      buttons.push(
        <button
          key= '1'
          value= '1'
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      )
      if (startPage > 2) {
        buttons.push(<span key="ellipsis1">...</span>);
      }
    }

    for(let i = startPage; i <= endPage; i++){
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          value={i}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      )
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<span key="ellipsis2">...</span>);
      }

      buttons.push(
        <button key={totalPages} onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return buttons
  }

  return (
    <div className='pagination'>
      {
        renderPagesButtons()
      }
    </div>
  )
}

export default Pagination