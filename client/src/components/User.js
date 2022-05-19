import React, {useContext, useState} from 'react';
import style from '../style/User.module.scss'
import noPic from '../assets/no-image.jpg'
import {ApiContext} from '../context/ApiContext';
import Modal from './Modal';
import classN from '../style/Modal.module.scss'


const User = () => {
  const context = useContext(ApiContext)
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

    return (
      <>
        <div className={ isOpen ?  classN.backdrop  : ""} onClick={toggleModal}></div>
        {  isOpen ?  <Modal toggleModal={toggleModal}/> : null }
        { context.user ?
          <div className={style.authUser}>
          <div className={style.userInfo}>
            <img src={noPic} alt={''}/>
          </div>
          <div>
            <p> {context.user.name} </p>
            <p> {context.user.surname}</p>
          </div>
          </div>
       :
            <div >
              <button className={style.authBtn} onClick={toggleModal}>Log in</button>
            </div >
        }
      </>
    );
};

export default User;