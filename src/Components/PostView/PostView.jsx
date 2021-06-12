import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Post/Post'

export default function PostView(props) {
  return (
    <div>
      <Post />
      <div className="post__buttons">
        <button className="post__button post_button_edit">Изменить</button>
        <button className="post__button post_button_delete">Удалить</button>
      </div>
    </div>
  )
}

PostView.propTypes = {

}