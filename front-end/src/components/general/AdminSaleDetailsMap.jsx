import React from 'react';

const dois = 2;

export default function AdminSaleDetailsMap(props) {
  const { saleDetails } = props;
  return (
    <div>
      {saleDetails && (saleDetails.map((product, index) => (
        <div key="eslint" className="adminDetailsContainer">
          <span data-testid={ `${index}-product-qtd` }>
            {`${product.quantity}`}
          </span>
          <span data-testid={ `${index}-product-name` }>
            {`${product.name}`}
          </span>
          <span data-testid={ `${index}-product-total-value` }>
            {`R$ ${product.total.toFixed(dois).replace('.', ',')}`}
          </span>
          <span data-testid={ `${index}-order-unit-price` } className="adminDetailsPrice">
            {`(R$ ${product.price.replace('.', ',')})`}
          </span>
        </div>
      )))}
    </div>
  );
}
