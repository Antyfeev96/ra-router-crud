import React, { useState, useEffect } from 'react'
import PostsContext from '../PostsContext/PostsContext'
import API from '../../js/API';

const api = new API();

function PostsProvider(props) {
  const [data, setData] = useState({
    posts: [],
    nextId: null,
  });

  const fetchPosts = async () => {
    const posts = await api.read();
    setData(() => ({
      posts: posts,
      nextId: posts.length + 1,
    }))
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <PostsContext.Provider value={{data, fetchPosts}}>
      {props.children}
    </PostsContext.Provider>
  )
}

PostsProvider.propTypes = {

}

export default PostsProvider

