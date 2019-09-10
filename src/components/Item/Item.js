import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Item = ({ title }) => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count]);

  return (
    <div>
      <p>{title}</p>
      <button>Click</button>
      {count && <span>Clicked: {count}</span>}
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string,
};

export default Item;
