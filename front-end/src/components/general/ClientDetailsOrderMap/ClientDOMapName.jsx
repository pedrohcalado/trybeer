import React from 'react';

export default function ClientDOMapName(props) {
  const { index, product } = props;
  return (
    <div>
      <span data-testid={ `${index}-product-name` }>
        { `${product.name}` }
      </span>
    </div>
  );
}
