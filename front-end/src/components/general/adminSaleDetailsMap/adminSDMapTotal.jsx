import React from 'react';

const dois = 2;

export default function adminSDMapTotal(product, index) {
  return (
    <div>
      <span data-testid={ `${index}-product-total-value` }>
        {`R$ ${product.total.toFixed(dois).replace('.', ',')}`}
      </span>
    </div>
  );
}
