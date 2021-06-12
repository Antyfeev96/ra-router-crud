import React, { useEffect, useState, useContext } from 'react'
import NewPostButton from '../NewPostButton/NewPostButton'
import Posts from '../Posts/Posts';

export default function HomePage(props) {
  const { posts } = props;
  return (
    <div className="homepage">
      <NewPostButton />
      <Posts posts={posts} />
    </div>
  )
}