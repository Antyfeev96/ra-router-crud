import './Post.scss';
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import PostsContext from '../PostsContext/PostsContext';

export default function Post(props) {
  return (
    <div className="post">
      <header className="post__header">
        <FontAwesomeIcon icon={faSmile} size='4x' />
        <div className="post__username">Володька</div>
        <div className="post__created">{props.created}</div>
        {props.children}
      </header>
      <div className="post__content">{props.content}</div>
    </div>
  )
}

Post.propTypes = {
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}