import React from 'react';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
        <h1 className={styles.h1}>Naty</h1>
        <span className={styles.span}>
          Esta es mi primera pagina, realizada con React.<br/>
          En la misma puse llamados asincronicos a una api externa, estados y routing + Css
         </span>
    </div>
  )
}