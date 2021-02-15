import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../../components/client/Menu';
import { ClientContext } from '../../context/client/ClientProvider';
import ClientCheckoutPageMaster from '../../components/general/ClientCheckoutPageMaster';
import '../../css/client/clientCheckoutPage.css';

const token = localStorage.getItem('token') || null;

export default function ClientCheckoutPage() {
  const { redirect } = useContext(ClientContext);
  if (!token) return <Redirect to="/login" />;
  if (redirect) return <Redirect to="/products" />;
  return (
    <div className="checkoutBody">
      <Menu title="Finalizar Pedido" />
      <ClientCheckoutPageMaster />
    </div>
  );
}
