import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ShowCommentsButton({ initialShown = false, onToggle }) {
  const [shown, setShown] = useState(initialShown);

  const handleClick = () => {
    const next = !shown;
    setShown(next);
    if (typeof onToggle === 'function') onToggle(next);
  };

  return (
    <button type="button" onClick={handleClick} className="rounded-full shadow-lg px-1 py-1 flex items-center justify-center hover:shadow-2xl transition-shadow">
      {shown ? 'Hide Comments' : `Show Comments`}
    </button>
  );
}

ShowCommentsButton.propTypes = {
  initialShown: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default ShowCommentsButton;