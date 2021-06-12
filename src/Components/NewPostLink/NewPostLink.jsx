import './NewPostLink.scss';
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function NewPostLink(props) {
  return (
    <Link to="./posts/new" className="new-post-button__link">
      Создать пост     
    </Link>
  )
}

NewPostLink.propTypes = {

}