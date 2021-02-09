import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GeneralContext from '../../context/general/GeneralContext';

export function ButtonPedidos() {
  return (
    <div>
      <Link
        to="/admin/orders"
        data-testid="side-menu-item-orders"
        className="buttonLateralAdm"
      >
        Pedidos
      </Link>
    </div>
  );
}

export function ButtonPerfil() {
  return (
    <div>
      <Link
        to="/admin/profile"
        data-testid="side-menu-item-profile"
        className="buttonLateralAdm"
      >
        Perfil
      </Link>
    </div>
  );
}

export function ButtonLogin() {
  const { setUserData, initialUser } = useContext(GeneralContext);
  return (
    <div>
      <Link
        to="/login"
        data-testid="side-menu-item-logout"
        className="buttonLateralAdm"
        onClick={ () => {
          localStorage.setItem('token', '');
          setUserData({ initialUser });
        } }
      >
        Sair
      </Link>
    </div>
  );
}
