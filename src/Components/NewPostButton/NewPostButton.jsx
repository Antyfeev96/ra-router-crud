import './NewPostButton.scss';
import React from 'react'
import NewPostLink from '../NewPostLink/NewPostLink'

export default function NewPostButton() {
  return (
    <div className="new-post-button">
      <NewPostLink />
    </div>
  )
}