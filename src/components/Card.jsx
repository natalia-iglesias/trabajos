import React from 'react';
import styles from '../styles/Card.module.css';

import { Link } from 'react-router-dom';

export default function Card({min, max, name,img, onClose, id}) {
  return (
    <div className={styles.card}>
        <button className={styles.x} onClick={onClose}>X</button>

        <Link to={`/cuidad/${id}`}>
        <h3 className={styles.name}>{name}</h3>
       </Link>
       <div>
         <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}alt=""/>
         </div>
      <div className={styles.temps}> 
        <span className={styles.temp}>Max</span>
        <p className={styles.temp}>{max}</p>
        </div>
      <div className={styles.temps}>
         <span className={styles.temp}>Min</span>
         <p className={styles.temp}>{min}º</p>
          </div>
      

    </div>
  );
};