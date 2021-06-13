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
            <Route path='/ra-router-crud/posts/new' exact component={NewPostWindow} />
            <Route path='/ra-router-crud/edit/:id' exact component={Post} />
            <Route path='/ra-router-crud/posts/:id' exact component={PostView} />
            <Route path='/ra-router-crud/' exact component={HomePage} />
          </Switch>
        </div>
      </Router>
    </PostsProvider>
  );
}
