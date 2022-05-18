import React from 'react';
import  style from '../style/Card.module.scss'
import noPosterPict from '../assets/noPoster.jpg'

const Card = ({movie}) => {
    return (
        <div className={style.card}>
            <div className={style.poster}>
                <img src={movie.Poster==='N/A' ? noPosterPict : movie.Poster} alt={''}/>
            </div>
                <p>Name: {movie.Title}</p>
                <p>Year: {movie.Year}</p>
                <p>imdbID: {movie.imdbID}</p>
                <p>Type: {movie.Type}</p>
        </div>
    );
};

export default Card;