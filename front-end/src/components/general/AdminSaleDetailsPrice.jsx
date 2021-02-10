import React from 'react';

export default function AdminSaleDetailsPrice(props) {
  const { saleDetails } = props;
  return (
    <div data-testid="order-total-value" className="adminDetailsTotal">
      {saleDetails && (`Total: R$ ${saleDetails[0].total_price.replace('.', ',')}`)}
    </div>
  );
}
