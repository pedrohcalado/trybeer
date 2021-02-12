import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ClientContext } from '../../context/client/ClientProvider';

const initialQuantity = 0;
const negativo = -1;

const altQuantity = async (altQntItens, newQuantity) => {
  const { cartProducts, id, name, price, setCartItens, cartItens } = altQntItens;
  const prodIndex = cartProducts.findIndex((i) => i.id === id);
  console.log(cartProducts);
  let newCartItens = cartProducts;
  if (prodIndex !== negativo) {
    if (newQuantity === initialQuantity) {
      newCartItens.splice(prodIndex, 1);
    } else {
      newCartItens[prodIndex] = { id, quantity: newQuantity, name, price };
    }
    setCartItens(newCartItens);
  } else {
    newCartItens = [...cartItens, { id, quantity: newQuantity, name, price }];
    setCartItens([...cartItens, { id, quantity: newQuantity, name, price }]);
  }
  localStorage.setItem('cart itens', JSON.stringify(newCartItens));
};

function decreaseItem(objQtditens, altQntItens, quantity, setQuantity) { 
  const { cartProducts, id, price } = altQntItens;
  const { cart, setCart, updateCart } = objQtditens;
  let newQuantity;
  const newCartValue = cart - Number(price);
  const cartItensLocalStorage = cartProducts.find((product) => product.id === id);
  if (cartItensLocalStorage && cartItensLocalStorage.quantity) {
    newQuantity = cartItensLocalStorage.quantity - 1;
  } else {
    newQuantity = quantity -1;
  }
  if (newQuantity >= initialQuantity) {
    setQuantity(newQuantity);
    altQuantity(altQntItens, newQuantity, setQuantity);
    setCart(newCartValue);
  }
  if (cart >= initialQuantity) {
    updateCart();
  }
}

export default function QtdButtondecreaseItem({ propsItens }) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const { cart, cartItens, setCart, setCartItens } = useContext(ClientContext);
  const { cartProducts, id, name, price, updateCart, index } = propsItens;
  const altQntItens = { cartProducts, id, name, price, setCartItens, cartItens };
  const objQtditens = { cart, quantity, setQuantity, setCart, updateCart };
  return (
    <button
      type="button"
      className="product-decrease-quantity"
      data-testid={ `${index}-product-minus` }
      onClick={ () => { decreaseItem(objQtditens, altQntItens, quantity, setQuantity); } }
    >
      -
    </button>
  );
}

QtdButtondecreaseItem.propTypes = {
  propsItens: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    index: PropTypes.number,
    cartProducts: PropTypes.arrayOf(PropTypes.object),
    updateCart: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};