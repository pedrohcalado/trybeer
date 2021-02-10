import React from 'react';

export default function ClientDOMapProduct(props) {
  const { index, product } = props;
  return (
    <div>
      <span data-testid={ `${index}-product-qtd` }>
        { `Qtd: ${product.quantity}` }
      </span>
    </div>
  );
}