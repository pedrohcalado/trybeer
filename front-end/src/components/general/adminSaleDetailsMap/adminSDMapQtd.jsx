import React from 'react';

export default function adminSDMapQtd(product, index) {
  return (
    <div>
      <span data-testid={ `${index}-product-qtd` }>
        {`${product.quantity}`}
      </span>
    </div>
  );
}
