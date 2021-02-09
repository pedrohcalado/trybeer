import React from 'react'


export default function Status(props) {
  const { index, order } = props;
  return (
    <div>
      <p className={ order.status === 'Entregue' ?
          'green orderStatus' : 'orderStatus' }
        >
          <p data-testid={ `${index}-order-status` }>{order.status}</p>
        </p>
    </div>
  )
}
