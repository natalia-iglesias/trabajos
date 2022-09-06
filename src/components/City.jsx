import React from "react";
import styles from '../styles/City.module.css';
export default function City({ city }) {
    return (
        <div className={styles.div} >
                <div  >
                    <h2 className={styles.name}>{city.name}</h2>
                    <div  className="info">
                        <div className={styles.info}>Temperatura: {city.temp} ºC</div>
                        <div className={styles.info}>Clima: {city.weather}</div>
                        <div className={styles.info}>Viento: {city.wind} km/h</div>
                        <div className={styles.info}>Cantidad de nubes: {city.clouds}</div>
                        <div className={styles.info}>Latitud: {city.latitud}º</div>
                        <div className={styles.info}>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}