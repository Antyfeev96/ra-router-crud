import './Posts.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Post/Post'

export default function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map((post) => <Post key={post.id} {...post} />)}
    </div>
  )
}

Posts.propTypes = {

}