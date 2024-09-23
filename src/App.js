import React, { useState, useEffect } from "react";
import PokeList from "./PokeList";
import axios from "axios";
import Pagination from "./Pagination";

const pokeURL= 'https://pokeapi.co/api/v2/pokemon/';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(pokeURL)
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      const {previous, next, results} = res.data;

      setLoading(false);
      setNextPageUrl(next);
      setPrevPageUrl(previous);
      setPokemon(results.map(p => p));
    })
    return() => cancel() // just calling the fucnction ref

  },[currentPageUrl]);

  function gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl);
  }

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  }

  if (loading) return 'Loading...'; 

  return (
    <>
      <PokeList pokemon={pokemon}/> 
      <Pagination
      gotoNextPage={gotoNextPage}
      gotoPrevPage={gotoPrevPage}
      nextPageUrl={nextPageUrl}
      prevPageUrl={prevPageUrl}
    />
    </>
  );
}

export default App;
