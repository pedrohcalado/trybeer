import React, { useContext } from 'react';
import { ClientContext } from '../../context/client/ClientProvider';
import PropTypes from 'prop-types';

const initialQuantity = 0;

export default function QtdButtonShowNumber(props) {
  const { id, index } = props;
  const { cartItens } = useContext(ClientContext);
  const cartItensLocalStorage = cartItens.find((product) => product.id === id);
  return (
    <span
      className="cart-product-quantity"
      key="cart-product-quantity"
      data-testid={ `${index}-product-qtd` }
    >
      { cartItensLocalStorage ? cartItensLocalStorage.quantity : initialQuantity }
    </span>
  );
}

QtdButtonShowNumber.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
