import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { ClientContext } from '../../context/client/ClientProvider';
import productsApi from '../../services/client/api';
import Menu from '../../components/client/Menu';
import ClientProductPMaster from '../../components/general/ClientProductPMaster';
import ClientProductPButton from '../../components/general/ClientProductPButton';
import '../../css/client/clientProductPage.css';

const zero = 0;
const token = localStorage.getItem('token') || null;
const cartValue = (parseFloat(localStorage.getItem('cart')) || zero);
const cartIt = JSON.parse(localStorage.getItem('cart itens')) || [];

const test = (cart) => {
  if (cart >= zero) localStorage.setItem('cart', (cart).toString());
};

const Products = () => {
  const { cart, setCart, cartItens } = useContext(ClientContext);
  const { setCartItens, products, setProducts } = useContext(ClientContext);
  useEffect(() => { test(cart); }, [cart]);
  useEffect(() => {
    productsApi().then((response) => setProducts(response));
    setCart(cartValue);
    console.log(cartValue, 'cartValue');
    localStorage.setItem('cart itens', JSON.stringify(cartIt));
    console.log(cartIt, 'cartIt');
    setCartItens(cartIt);
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
