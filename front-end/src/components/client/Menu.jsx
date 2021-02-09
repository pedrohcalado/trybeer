import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../css/client/menu.css';
import { MenuLateral } from '../Buttons/MenuLinks';

function menuChecked(changeState) {
  if (document.getElementById('check').checked) {
    changeState(true);
  }
  if (!document.getElementById('check').checked) {
    changeState(false);
  }
}

export default function Menu(props) {
  const { title } = props;
  const [isVisible, setIsVisible] = useState(false);
  return (
    <header className="menuSuperior">
      <label className="top-hamburguer" data-testid="top-hamburguer" htmlFor="check">
        &#9776;
        <input type="checkbox" className="check" id="check" 
          onChange={ () => menuChecked(setIsVisible) }
        />  
      </label>
      <h1 className="topTitle" data-testid="top-title">
        {title}
      </h1>
      {isVisible && (
        <MenuLateral />
      )}
    </header>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
};
