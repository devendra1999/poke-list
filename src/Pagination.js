import React from 'react'

export default function Pagination(props) {

  const { gotoNextPage, gotoPrevPage} = props;
  
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Prev</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
} 
