import React, {useContext, useState} from 'react';
import User from "./User";
import style from '../style/Header.module.scss'
import {ApiContext} from "../context/ApiContext";

const Header = () => {
    const context=useContext(ApiContext)
    const [movie, setMovie] = useState('')

    const getTitle = (e) => {
        if (e.key === 'Enter') {
          context.setTitle(movie)
        }
    }

    const changeInput = (e) => {
      setMovie(e.target.value)
      if (!e.target.value) {
          context.setTitle('Batman')
        }
    }

    return (
        <div className={style.title}>
            <h1>Movie catalog</h1>
            <div className={style.input}><input type='text' onKeyDown={getTitle} onChange={changeInput} value={movie} placeholder="type and press ENTER"/></div>
            <User/>
        </div>
    );
};

export default Header;