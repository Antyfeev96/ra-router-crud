import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function PreviousPageButton() {
  return (
    <React.Fragment>
      <Link to='../'>
        <FontAwesomeIcon icon={faTimes} size='2x' />
      </Link>
    </React.Fragment>
  );
}
