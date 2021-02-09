import React from 'react';
import '../../css/admin/menuAdm.css';
import { ButtonPedidos, ButtonPerfil, ButtonLogin } from '../Buttons/ButtonsMenuAdm';

export default function MenuAdm() {
  return (
    <div className="side-menu-container-adm">
      <h1 className="topTitleAdm">TryBeer</h1>
      <nav className="menuLateralAdm">
        <div className="menuButtonAdm">
          <ButtonPedidos />       
          <ButtonPerfil />
        </div>
        <div className="menuButtonAdm textCenter">
          <ButtonLogin />
        </div>
      </nav>
    </div>
  );
}
