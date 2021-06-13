import React, { useEffect, useState, useContext } from 'react'
import NewPostButton from '../NewPostButton/NewPostButton'
import Posts from '../Posts/Posts';
import PostsContext from '../PostsContext/PostsContext';

export default function HomePage() {
  return (
    <div className="homepage">
      <NewPostButton />
      <Posts />
    </div>
  )
}