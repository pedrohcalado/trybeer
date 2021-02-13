import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { ClientContext } from '../../context/client/ClientProvider';
import productsApi from '../../services/client/api';
import Menu from '../../components/client/Menu';
import ClientProductPMaster from '../../components/general/ClientProductPMaster';
import ClientProductPButton from '../../components/general/ClientProductPButton';
import '../../css/client/clientProductPage.css';

const zero = 0;
const cartValue = (parseFloat(localStorage.getItem('cart')) || zero);
const token = localStorage.getItem('token') || null;

const test = (cart) => {
  if (cart >= zero) localStorage.setItem('cart', (cart).toString());
};

const Products = () => {
  const cartIt = JSON.parse(localStorage.getItem('cart itens')) || [];
  const { cart, setCart, products } = useContext(ClientContext);
  const { setCartItens, cartItens, setProducts } = useContext(ClientContext);
  useEffect(() => { test(cart); }, [cart]);
  useEffect(() => {
    productsApi().then( (response) => setProducts(response));
    setCartItens(cartIt);
    setCart(cartValue);
  }, [setCart, setCartItens, setProducts]);
  if (!token) return <Redirect to="/login" />;
  return (
    <div>
      <Menu title="TryBeer" />
      <ClientProductPMaster products={ products } />
      <ClientProductPButton cart={ cart } cartItens={ cartItens } />
    </div>
  );
};

export default Products;
