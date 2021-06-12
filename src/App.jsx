import "./App.scss";
import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import NewPostWindow from "./Components/NewPostWindow/NewPostWindow";
import API from './js/API';

const api = new API();

export default function App() {
  const [data, setData] = useState({
    posts: [],
    nextId: null,
  });

  const fetchPosts = async () => {
    const posts = await api.read();
    console.log(posts.length);
    setData(() => ({
      posts: posts,
      nextId: posts.length + 1,
    }))
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className='app'>
      <Router>
        <Route path='/ra-router-crud' exact render={() => <HomePage posts={data.posts} />} />
        <Route path='/ra-router-crud/posts/new' exact render={() => <NewPostWindow fetchPosts={fetchPosts} nextId={data.nextId} />} />
      </Router>
    </div>
  );
}
