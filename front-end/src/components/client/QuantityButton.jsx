import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ClientContext } from '../../context/client/ClientProvider';
import QtdButtondecreaseItem from '../general/QtdButtondecreaseItem';
import QtdButtonincreaseItem from '../general/QtdButtondeincreaseItem';
import QtdButtonShowNumber from '../general/QtdButtonShowNumber';

export default function QuantityButton(props) {
  const { id, index, price, name } = props;
  const { cart } = useContext(ClientContext);
  const updateCart = () => localStorage.setItem('cart', (cart).toString());
  const cartProducts = JSON.parse(localStorage.getItem('cart itens'));
  const propsItens = { cartProducts, id, name, price, index, updateCart };
  return (
    <div className="quantity-container">
      <QtdButtondecreaseItem propsItens={ propsItens } />
      <QtdButtonShowNumber id={ id } index={ index } cartProducts={ cartProducts } />
      <QtdButtonincreaseItem propsItens={ propsItens } />
    </div>
  );
}

QuantityButton.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
