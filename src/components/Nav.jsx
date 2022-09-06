import React from 'react';
import SearchBar from './SearchBar';
import styles from '../styles/Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav({onSearch}) {
  return (
    <div>
       <Link to='/'>
        <span className={styles.span} >
           Weather App
        </span><br></br>
        </Link>
      <Link to='/about'>
        <span className={styles.spancito}>About</span>
      </Link>
        <SearchBar onSearch={onSearch}/>

    </div>
  )
}