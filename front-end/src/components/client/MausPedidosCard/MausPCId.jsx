import React from 'react';
import PropTypes from 'prop-types';

export default function MausPCId(props) {
  const { index, order } = props;
  return (
    <div data-testid={ `${index}-order-number` }>
      { `Pedido ${order.id}` }
    </div>
  );
}

MausPCId.propTypes = {
  order: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};
