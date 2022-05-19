import React, {useContext, useState} from 'react';
import style from "../style/Modal.module.scss";
import {ApiContext} from '../context/ApiContext';

const Modal = ({toggleModal}) => {
  const ctx = useContext(ApiContext)
  const [enteredName, setEnteredName] = useState('');
  const [enteredSurname, setEnteredSurname] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

   if (enteredSurname.trim().length === 0 || enteredName.trim().length === 0) {
      return;
    }else {
     ctx.setUser({
       name: enteredName,
       surname: enteredSurname
     })
   }
    toggleModal()
  }

  const NameHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const surnameHandler = (event) => {
    setEnteredSurname(event.target.value);
  }
  return (
    <div className={style.modalContainer}>
      <h3>Log in</h3>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input
          id='name'
          type="text"
          onChange={NameHandler}
        />
        <label htmlFor="surname" >Surname</label>
        <input
          id='surname'
          type="text"
          onChange={surnameHandler}
        />
        <button className={style.btnAdd} type="submit">Add </button>
      </form>
    </div>
  );
};

export default Modal;