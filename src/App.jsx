import "./App.scss";
import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import NewPostWindow from "./Components/NewPostWindow/NewPostWindow";
import PostView from "./Components/PostView/PostView";
import PostsProvider from "./Components/PostsProvider/PostsProvider";

export default function App() {
  return (
    <PostsProvider>
      <Router>
        <div className='app'>
          <Route
            path='/'
            exact
            component={HomePage}
          />
          <Switch>
            <Route
              path='/posts/new'
              exact
              component={NewPostWindow}
            />
            <Route path='/posts/:id' exact component={PostView} />
          </Switch>
        </div>
      </Router>
    </PostsProvider>
  );
}
