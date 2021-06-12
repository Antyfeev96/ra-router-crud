import './CreateForm.scss';
import React, { useEffect, useRef, } from 'react'
import PropTypes from 'prop-types'
import API from '../../js/API';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const api = new API();

export default function CreateForm(props) {
  const { nextId, fetchPosts } = props;
  const inputRef = useRef();

  const sendMessage = async () => {
    await api.addMessage(nextId, inputRef.current.value);
    await fetchPosts();
  }
  
  return (
    <form action="" className="form">
      <input ref={inputRef} type="text" name="newMessage" id="newMessage" />
      <Link className="form__link" to='../' onClick={() => sendMessage()}>Опубликовать</Link>
    </form>
  )
}

CreateForm.propTypes = {

}