import './Posts.scss'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Post from '../Post/Post'
import PostsContext from '../PostsContext/PostsContext';

export default function Posts() {
  const posts = useContext(PostsContext).data.posts
  return (
      <div className="posts">
        {posts.map((post) => <Link key={post.id} to={`/posts/${post.id}`}><Post {...post} /></Link>)}
      </div>
  )
}