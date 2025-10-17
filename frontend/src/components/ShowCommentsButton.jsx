import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ShowCommentsButton({ commentsShown, setShownComments }) {

  return (
    <button type="button" onClick={() => setShownComments(!commentsShown)} className="rounded-full shadow-lg px-1 py-1 flex items-center justify-center hover:shadow-2xl transition-shadow">
      {commentsShown ? 'Hide Comments' : 'Show Comments'}
    </button>
  );
}

ShowCommentsButton.propTypes = {
  commentsShown: PropTypes.bool,
};

export default ShowCommentsButton;