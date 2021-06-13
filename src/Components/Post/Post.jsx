import "./Post.scss";
import React, { useContext, useRef } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import PostsContext from "../PostsContext/PostsContext";
import API from "../../js/API";
import PreviousPageButton from "../PreviousPageButton/PreviousPageButton";

const api = new API();

export default function Post(props) {
  const inputRef = useRef();
  const { match } = props;
  const { posts } = useContext(PostsContext).data;
  const { fetchPosts } = useContext(PostsContext);
  const post = match ? posts.find(post => post.id === +match.params.id) : false;
  
  const sendChanges = async (id, content) => {
    await api.updateMessage(id, content);
    await fetchPosts();
  }

  return (
    <div className='post'>
      <header className='post__header'>
        <div className='post__data'>
          <FontAwesomeIcon icon={faSmile} size='4x' />
          <div className='post__username'>Володька</div>
          <div className='post__created'>{props.created || post.created}</div>
        </div>
        {props.children}
        {match ? <PreviousPageButton /> : null}
      </header>
      {match ? (
        <React.Fragment>
          <input ref={inputRef} className='post__content' defaultValue={post.content} />
          <button onClick={() => sendChanges(post.id, inputRef.current.value)} className="post__save"><Link to='../../'>Сохранить</Link></button>
        </React.Fragment>
      ) : (
        <div className='post__content'>{props.content}</div>
      )}
    </div>
  );
}

Post.propTypes = {
  created: PropTypes.string,
  content: PropTypes.string,
};
