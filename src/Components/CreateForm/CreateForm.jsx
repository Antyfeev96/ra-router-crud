import './CreateForm.scss';
import React, { useContext, useRef } from 'react'
import API from '../../js/API';
import { Link } from 'react-router-dom';
import PostsContext from '../PostsContext/PostsContext';

const api = new API();

export default function CreateForm() {
  const fetchPosts = useContext(PostsContext).fetchPosts;
  const { nextId } = useContext(PostsContext).data; 
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