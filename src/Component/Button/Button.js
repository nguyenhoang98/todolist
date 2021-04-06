import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

Button.propTypes = {};

function Button(props) {
  const { handleOpenForm } = props;
  return (
    <button className="btn btn-show-form" onClick={handleOpenForm}>
      Mở Form{" "}
    </button>
  );
}

export default Button;
