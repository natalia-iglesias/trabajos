import React from 'react';
import Card from './Card.jsx';
import styles from '../styles/Cards.module.css'

export default function Cards({cities, onClose}) {
    if(cities) {
        return (
          <div className={styles.cards}>  
            {cities.map(c => <Card
                max ={c.max}
                min={c.min}
                name={c.name}
                img={c.img}
                onClose={()=> onClose(c.id)}
                id={c.id}
                key={c.id}
            />)}
        </div>
        );
    } else{
        return(
            <div>
                <h4>Sin Ciudades</h4>
            </div>
        )
    }
  
 
}