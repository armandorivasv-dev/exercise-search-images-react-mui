import React, { createContext, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../api/apiKey';

export const ImageContext = createContext();

export const ImageContextProvider = ( { children } ) => {
  const [ search, setSearch ] = useState("");
  const [ perPage, setPerPage ] = useState("");
  const [ result, setResult ] = useState([]);

  function handleChange (e) {    
    const search = e.target.value;
    setSearch(search);
  }

  function noOfImages (e) {
    const perPage = e.target.value;
    setPerPage(perPage)
  }

  function handleSubmit (e) {
    e.preventDefault()
    const url = "https://api.pexels.com/v1/search?query=" + search + "&per_page=" + perPage;
    axios.get(url, {
      headers: {
      'Authorization': `${apiKey}`
    }})
    .then(data=>{
      setResult(data.data.photos)
    })    
  }


  return (    
      <ImageContext.Provider value={{
        handleChange,
        noOfImages,
        handleSubmit,
        search,
        perPage,
        result
        }}>
        { children }
      </ImageContext.Provider>    
  )
}

export default ImageContextProvider