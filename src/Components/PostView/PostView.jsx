import './PostView.scss';
import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Post from '../Post/Post'
import PostsContext from '../PostsContext/PostsContext';
import PreviousPageButton from '../PreviousPageButton/PreviousPageButton';

export default function PostView({ match }) {
  const { posts } = useContext(PostsContext).data;
  const post = posts.find(post => post.id === +match.params.id);
  console.log(match.params);
  return (
    <div>
      <Post {...post}>
        <PreviousPageButton />
      </Post>
      <div className="post__buttons">
        <button className="post__button post__button_edit">Изменить</button>
        <button className="post__button post__button_delete">Удалить</button>
      </div>
    </div>
  )
}

PostView.propTypes = {

}