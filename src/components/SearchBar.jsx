import React, { useState } from 'react';
import styles from '../styles/Search.module.css';

export default function SearchBar({onSearch}) {

    const[city, setCity] =useState("");

    const handleInputChange = (e)=>{
        e.preventDefault();
        setCity(e.target.value)
    }


  return (
   <form  className={styles.SearchBar} onSubmit ={(e) =>{
    e.preventDefault();
    onSearch(city);
    setCity("");
   }}>
    <input className={styles.input}
    type="text"
    placeholder='Ciudad...'
    value={city}
    onChange={handleInputChange}
    />

    <input className={styles.button}
    type="submit"
    value="Agregar"
    />
  
   </form>
  )
}