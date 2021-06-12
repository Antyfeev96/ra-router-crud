import './Posts.scss';
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Post from '../Post/Post'

export default function Posts(props) {
  const { posts } = props;

  return (
    <div className="posts">
      {posts.map((post) => <Link to={`/posts/${post.id}`}><Post key={post.id} {...post} /></Link>)}
    </div>
  )
}

Posts.propTypes = {

}