import './NewPostButton.scss';
import React from 'react'
import PropTypes from 'prop-types'
import NewPostLink from '../NewPostLink/NewPostLink'

export default function NewPostButton(props) {
  return (
    <div className="new-post-button">
      <NewPostLink />
    </div>
  )
}

NewPostButton.propTypes = {

}