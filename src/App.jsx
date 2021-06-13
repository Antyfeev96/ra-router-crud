import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import NewPostWindow from "./Components/NewPostWindow/NewPostWindow";
import PostView from "./Components/PostView/PostView";
import PostsProvider from "./Components/PostsProvider/PostsProvider";
import Post from "./Components/Post/Post";

export default function App() {
  return (
    <PostsProvider>
      <Router>
        <div className='app'>
          <Switch>
            <Route path='/posts/new' exact component={NewPostWindow} />
            <Route path='/edit/:id' exact component={Post} />
            <Route path='/posts/:id' exact component={PostView} />
            <Route path='/' exact component={HomePage} />
          </Switch>
        </div>
      </Router>
    </PostsProvider>
  );
}
