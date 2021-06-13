import './PostView.scss';
import React, {useContext} from 'react'
import Post from '../Post/Post'
import PostsContext from '../PostsContext/PostsContext';
import PreviousPageButton from '../PreviousPageButton/PreviousPageButton';
import API from '../../js/API';
import { Link } from 'react-router-dom';

const api = new API();

export default function PostView({ match }) {
  const { posts } = useContext(PostsContext).data;
  const { fetchPosts } = useContext(PostsContext);
  const post = posts.find(post => post.id === +match.params.id);
  
  const deletePost = async (id) => {
    await api.deleteMessage(id);
    await fetchPosts();
  }

  return (
    <div>
      <Post {...post}>
        <PreviousPageButton />
      </Post>
      <div className="post__buttons">
        <Link to={`/ra-router-crud/edit/${post.id}`} className="post__button post__button_edit">Изменить</Link>
        <Link to='../../' onClick={() => deletePost(post.id)} className="post__button post__button_delete">Удалить</Link>
      </div>
    </div>
  )
}

PostView.propTypes = {

}