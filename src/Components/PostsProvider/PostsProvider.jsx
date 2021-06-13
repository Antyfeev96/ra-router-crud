import React, { useState, useEffect } from 'react'
import PostsContext from '../PostsContext/PostsContext'
import API from '../../js/API';

const api = new API();

function PostsProvider(props) {
  const [data, setData] = useState({
    posts: [],
    nextId: 0,
  });

  const fetchPosts = async () => {
    const posts = await api.read();
    setData(() => ({
      posts: posts,
      nextId: data.nextId++,
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

