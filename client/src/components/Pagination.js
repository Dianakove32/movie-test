import React, {useContext} from 'react';
import   '../index.scss'
import {ApiContext} from "../context/ApiContext";

const Pagination = () => {
const context = useContext(ApiContext)
  const pageNumber = []
  for(let i = 1; i <= context?.data?.Search?.length; i++){
      pageNumber.push(i)
  }
    return (
        <div className='paginationContainer'>
          <span className='paginationItem' onClick={()=>context.setPage(prev=> prev - 1)}> &#129040; </span>
            {pageNumber.map(num => <span key={num} className='paginationItem' onClick={()=>context.setPage(num)}>{num}</span>)}
          <span className='paginationItem' onClick={()=>context.setPage(prev=> prev + 1)}> &#129042;</span>
        </div>
    );
};

export default Pagination