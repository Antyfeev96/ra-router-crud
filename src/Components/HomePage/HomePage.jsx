import React from 'react'
import NewPostButton from '../NewPostButton/NewPostButton'
import Posts from '../Posts/Posts';

export default function HomePage() {
  return (
    <div className="homepage">
      <NewPostButton />
      <Posts />
    </div>
  )
}