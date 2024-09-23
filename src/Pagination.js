import React from 'react'

export default function Pagination(props) {

  const { gotoNextPage, gotoPrevPage, prevPageUrl, nextPageUrl} = props;
  
  return (
    <div>
      {console.log(gotoPrevPage)}
      {prevPageUrl && <button onClick={gotoPrevPage}>Prev</button>}
      {nextPageUrl && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
} 
