import React from 'react';
import PropTypes from 'prop-types';

export default function AdminSaleDetailsStatus(props) {
  const { saleDetails } = props;
  return (
    <div className="adminDetailsTitle">
      <div data-testid="order-number">
        {saleDetails && `Pedido ${saleDetails[0].sale_id}`}
      </div>
      <div
        data-testid="order-status"
        className={ saleDetails && `${saleDetails[0].status}`
        === 'Entregue' ? 'adminDetailsGreen adminDetailsStatus' : 'adminDetailsStatus' }
      >
        {saleDetails && `${saleDetails[0].status}`}
      </div>
    </div>
  );
}

AdminSaleDetailsStatus.propTypes = {
  saleDetails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
