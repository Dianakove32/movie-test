import React, {useContext} from 'react';
import   '../index.scss'
import {ApiContext} from "../context/ApiContext";

const Pagination = () => {
const context = useContext(ApiContext)
  const pageNumber = []
  const data = Math.ceil(context?.data?.totalResults / 10)
  for(let i = 1; i <= data; i++){
      pageNumber.push(i)
  }

  const setPage =(id)=>{
    if(id === 1){
       context.setPage(prev => prev - 1)
    }else{
      context.setPage(prev => prev + 1)
    }
  }
    return (
            <>
          { pageNumber.length > 0 ?
        <div className='paginationContainer'>
          <div className="paginationItemArrow"  id='1' onClick={()=>setPage(1)}> &#129040; </div>
          <div className='pag-number'>
              {pageNumber.map(num => {
                let isActivePage;
                (num === context.page) ? isActivePage = "active" : isActivePage = ""
                return (<span key={num} className={["paginationItem", isActivePage].join(" ")}
                      onClick={() => context.setPage(num)}>{num}</span>)

              })}</div>
           <div className="paginationItemArrow" id='2' onClick={()=> setPage(2)}> &#129042;</div>
        </div> : null
          }
            </>
    );
};

export default Pagination