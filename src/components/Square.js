import React from 'react';
import PropTypes from 'prop-types';

export default function Square(props) {
  const { onClick, value } = props;
  return (
    <button className="square" type="button" onClick={onClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
