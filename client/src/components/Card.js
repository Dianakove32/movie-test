import React from 'react';
import  style from '../style/Card.module.scss'
import noPosterPict from '../assets/no-image.jpg'

const Card = ({movie}) => {
    return (
        <div className={style.card}>
            <div className={style.poster}>
                <img src={movie.Poster==='N/A' ? noPosterPict : movie.Poster} alt={''}/>
            </div>
                <p className={style.title}><b>{movie.Title}</b> </p>
                <p>Year: {movie.Year}</p>
                <p>imdbID: {movie.imdbID}</p>
                <p>Type: {movie.Type}</p>
        </div>
    );
};

export default Card;