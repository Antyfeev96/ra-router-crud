import React from 'react'
import PropTypes from 'prop-types'
import NewPost from '../NewPost/NewPost'

export default function HomePage(props) {
  return (
    <div className="homepage">
      <NewPost />
    </div>
  )
}

HomePage.propTypes = {

}