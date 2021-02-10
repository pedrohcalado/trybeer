import React from 'react';

const zero = 0;
const dois = 2;

export default function ClientDetailsOrderPrice(props) {
  const { order } = props;
  return (
    <div>
      {order && (
          <div data-testid="order-total-value" className="detailsTotal">
            {`Total R$ ${order.orderDetail
              .reduce((total, product) => total + product.total, zero)
              .toFixed(dois)
              .replace('.', ',')}
            `}
          </div>
        )}
    </div>
  );
}
