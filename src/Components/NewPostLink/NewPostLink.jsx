import './NewPostLink.scss';
import React from 'react'
import { Link } from 'react-router-dom';

export default function NewPostLink() {
  return (
    <Link to="./posts/new" className="new-post-button__link">
      Создать пост     
    </Link>
  )
}