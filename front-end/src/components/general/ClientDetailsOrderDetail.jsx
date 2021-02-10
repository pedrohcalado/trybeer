import React from 'react';
import PropTypes from 'prop-types';

export default function ClientDetailsOrderDetail(props) {
  const { order } = props;
  return (
    <div className="datailPedido">
      <span data-testid="order-number">
        {order && `Pedido ${order.orderDetail[0].sale_id}`}
      </span>
      <span data-testid="order-date">
        {order && order.orderDetail[0].sale_date}
      </span>
    </div>
  );
}

ClientDetailsOrderDetail.propTypes = {
  order: PropTypes.arrayOf(PropTypes.object).isRequired,
};
