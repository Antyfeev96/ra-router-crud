import './NewPost.scss';
import React from 'react'
import PropTypes from 'prop-types'
import NewPostLink from '../NewPostLink/NewPostLink'

export default function NewPost(props) {
  return (
    <div className="new-post">
      <NewPostLink />
    </div>
  )
}

NewPost.propTypes = {

}