import './NewPostWindow.scss';
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import CreateForm from '../CreateForm/CreateForm';

export default function NewPostWindow(props) {
  return (
    <div className="new-post-window">
      <Link className="new-post-window__exit" to='../'>
        <FontAwesomeIcon icon={faTimes} size='2x' />
      </Link>
      <CreateForm {...props} />
    </div>
  )
}

NewPostWindow.propTypes = {

}