import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
// import ClientContext from './ClientContext';
// import productsApi from '../../services/client/api';

export const ClientContext = createContext();

const initialQuantity = 0;

const ClientProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(localStorage.getItem('cart') || initialQuantity);
  const [cartItens, setCartItens] = useState(JSON.parse(localStorage.getItem('cart itens')) || []);
  const [redirect, setRedirect] = useState(false);
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [purchaseDone, setPurchaseDone] = useState(false);
  const context = {
    email,
    setEmail,
    name,
    setName,
    products,
    setProducts,
    cart,
    setCart,
    cartItens,
    setCartItens,
    redirect,
    setRedirect,
    street,
    setStreet,
    streetNumber,
    setStreetNumber,
    purchaseDone,
    setPurchaseDone
  };
  return <ClientContext.Provider value={ context }>{children}</ClientContext.Provider>;
};

export default ClientProvider;

ClientProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};
