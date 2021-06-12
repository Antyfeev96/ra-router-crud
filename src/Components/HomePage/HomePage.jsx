import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewPostButton from '../NewPostButton/NewPostButton'
import Posts from '../Posts/Posts';
import API from '../../js/API';

const api = new API();

export default function HomePage(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await api.read();
      setPosts(() => posts)
    }
    fetchPosts();
  }, [])

  return (
    <div className="homepage">
      <NewPostButton />
      <Posts posts = {posts} />
    </div>
  )
}

HomePage.propTypes = {

}