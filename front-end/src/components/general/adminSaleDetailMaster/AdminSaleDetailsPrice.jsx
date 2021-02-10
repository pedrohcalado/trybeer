import React from 'react';
import PropTypes from 'prop-types';

export default function AdminSaleDetailsPrice(props) {
  const { saleDetails } = props;
  return (
    <div data-testid="order-total-value" className="adminDetailsTotal">
      {saleDetails && (`Total: R$ ${saleDetails[0].total_price.replace('.', ',')}`)}
    </div>
  );
}

AdminSaleDetailsPrice.propTypes = {
  saleDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
