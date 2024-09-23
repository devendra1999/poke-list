import React, { useState, useEffect } from "react";
import PokeList from "./PokeList";
import axios from "axios";

const pokeURL= 'https://pokeapi.co/api/v2/pokemon/';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(pokeURL)
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(res => {
      setLoading(false);
      setNextPageUrl(res.data?.next);
      setPrevPageUrl(res.data?.previous);
      setPokemon(res.data?.results.map(p => p.name));
    })
    return( () =>
      cancel.cancel()
    )
  },[currentPageUrl]);

  if (loading) return 'Loading...'; 

  return (
    <PokeList pokemon={pokemon}/> 
  );
}

export default App;
