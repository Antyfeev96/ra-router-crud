import './PreviousPageButton.scss';
import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function PreviousPageButton() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return (
      <button className="return-button" type="button" onClick={goBack}>
        <FontAwesomeIcon icon={faTimes} size='2x' />
      </button>
  );
}
