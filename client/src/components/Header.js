import React, {useContext} from 'react';
import User from "./User";
import style from '../style/Header.module.scss'
import {ApiContext} from "../context/ApiContext";

const Header = () => {
    const context=useContext(ApiContext)

    const getTitle = (e) => {
        context.setTitle(e.target.value)
    }
    return (
        <div className={style.title}>
            <h1>Movie catalog</h1>
            <div><input type='text' onInput={getTitle} /></div>
            <User/>
        </div>
    );
};

export default Header;