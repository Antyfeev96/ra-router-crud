import './Posts.scss';
import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Post/Post'

export default function Posts(props) {
  const { posts } = props;
  return (
    <div className="posts">
      {posts.map((post) => <Post key={post.id} {...post} />)}
    </div>
  )
}

Posts.propTypes = {

}