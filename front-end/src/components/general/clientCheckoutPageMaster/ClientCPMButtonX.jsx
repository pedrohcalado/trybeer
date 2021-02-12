import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ClientContext } from '../../../context/client/ClientProvider';

const zero = 0;

const removeProduct = (itens) => {
  const { index, /* setLocalCartItens, */ cartItens, setCart, setCartItens } = itens;
  console.log(cartItens, 'cartItens-1');
  const newCartItens = cartItens.filter((item, i) => i !== index);
  console.log(newCartItens);
  const newCart = newCartItens
    .reduce((acc, elem) => acc + ((Number(elem.price) * Number(elem.quantity))), zero);
  localStorage.setItem('cart itens', JSON.stringify(newCartItens));
  localStorage.setItem('cart', (newCart));
  /* setLocalCartItens(newCartItens); */
  setCartItens(newCartItens);
  setCart(newCart);
};

export default function ClientCPMButtonX(props) {
  const { index/* , setLocalCartItens */ } = props;
  const { cartItens, setCart, setCartItens } = useContext(ClientContext);
  const itens = { index, /* setLocalCartItens, */ cartItens, setCart, setCartItens };
  return (
    <div>
      <button
        data-testid={ `${index}-removal-button` }
        type="button"
        className="checkoutButton"
        onClick={ () => removeProduct(itens) }
      >
        X
      </button>
    </div>
  );
}

ClientCPMButtonX.propTypes = {
  setLocalCartItens: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};
