import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GeneralContext from '../../context/general/GeneralContext';

export function MenuLateral() {
  return (
    <div className="side-menu-container">
      <nav className="menuLateral">
        <div className="menuButton">
          <LinkProducts />
          <LinkOrders />
          <LinkProfile />
        </div>
        <div className="menuButton textCenter">
          <LinkLogin />
        </div>
      </nav>
    </div>
  );
}

export function LinkProducts() {
  return (
    <div>
      <Link
        to="/products"
        data-testid="side-menu-item-products"
        className="buttonLateral"
      >
        Produtos
      </Link>
    </div>
  );
}

export function LinkOrders() {
  return (
    <div>
      <Link
        to="/orders"
        data-testid="side-menu-item-my-orders"
        className="buttonLateral"
      >
        Meus Pedidos
      </Link>
    </div>
  );
}

export function LinkProfile() {
  return (
    <div>
      <Link
        to="/profile"
        data-testid="side-menu-item-my-profile"
        className="buttonLateral"
      >
        Meu Perfil
      </Link>
    </div>
  );
}

export function LinkLogin() {
  const { setUserData, initialUser } = useContext(GeneralContext);
  return (
    <div>
      <Link
        to="/login"
        data-testid="side-menu-item-logout"
        className="buttonLateral"
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
