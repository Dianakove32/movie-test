import React, {useContext} from 'react';
import {ApiContext} from "../context/ApiContext";
import Card from "./Card";
import  style from '../style/CardList.module.scss'

const CardList = () => {
    const context = useContext(ApiContext);

    return (
        <>
            {
              context?.title ?  <p className={style.searchResult}><b>You serched for: {context?.title}, {context?.data?.totalResults || 0} results found</b></p> : null
            }
        <div className={style.cardsContainer}>
            {context.isLoading && <h1>Loading...</h1>}
            {(!context?.data?.Search && !context.isLoading) && <h2>No movie {context.title}  </h2>}
            {
              context?.data?.Search  ? context?.data?.Search.map(movie=><Card key={movie.imdbID} movie={movie}/>) : null
            }
        </div>
        </>
    );
};

export default CardList;