import React, {useContext} from 'react';
import {ApiContext} from "../context/ApiContext";
import Card from "./Card";
import  style from '../style/CardList.module.scss'

const CardList = () => {
    const context = useContext(ApiContext);

    return (
        <>
        <p>You serched for: {context?.title}, {context?.data?.Search?.length}</p>
        <div className={style.cardsContainer}>
            {context.isLoading && <h1>Loading...</h1>}
            {
              context?.data?.Search ?  context?.data?.Search.map(movie=><Card key={movie.imdbID} movie={movie}/>) : <h1>No movie {context.title}</h1>
            }
        </div>
        </>
    );
};

export default CardList;