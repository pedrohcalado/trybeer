import React from 'react';

export default function adminSDMapName(product, index) {
  return (
    <div>
      <span data-testid={ `${index}-product-name` }>
        {`${product.name}`}
      </span>
    </div>
  );
}
