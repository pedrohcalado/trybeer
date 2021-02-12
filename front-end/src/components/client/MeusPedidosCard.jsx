import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MausPCId from './MausPedidosCard/MausPCId';
import MausPCDate from './MausPedidosCard/MausPCDate';
import MausPCPrice from './MausPedidosCard/MausPCPrice';

export default function MausPedidosCard(props) {
  const { pedidos } = props;
  return (
    <div className="bodyMeusPedidos">
      {pedidos.map((order, index) => (
        <Link to={ `/orders/${order.id}` } key={ order.id } className="linkMeusPedidos">
          <div data-testid={ `${index}-order-card-container` } className="cardConteiner">
            <MausPCId index={ index } order={ order } />
            <MausPCDate index={ index } order={ order } />
            <MausPCPrice index={ index } order={ order } />
          </div>
        </Link>
      ))}
    </div>
  );
}

MausPedidosCard.propTypes = {
  pedidos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
