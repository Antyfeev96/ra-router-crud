import './NewPostWindow.scss';
import React from 'react'
import CreateForm from '../CreateForm/CreateForm';
import PreviousPageButton from '../PreviousPageButton/PreviousPageButton';

export default function NewPostWindow() {
  return (
    <div className="new-post-window">
      <PreviousPageButton />
      <CreateForm />
    </div>
  )
}

NewPostWindow.propTypes = {

}