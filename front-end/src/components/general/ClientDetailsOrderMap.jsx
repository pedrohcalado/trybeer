import React from 'react';
import ClientDOMapName from './ClientDetailsOrderMap/ClientDOMapName';
import ClientDOMapProduct from './ClientDetailsOrderMap/ClientDetailsOrderProduct';
import ClientDOMapPrice from './ClientDetailsOrderMap/ClientDetailsOrderPrice';

export default function ClientDetailsOrderMap(props) {
  const { order } = props;
  return (
    <div>
      {order && (
        order.orderDetail.map((product, index) => (
          <div key="fechalint" className="datailCard">
            <ClientDOMapName index={ index } product={ product }/>
            <ClientDOMapProduct index={ index } product={ product }/>
            <ClientDOMapPrice index={ index } product={ product }/>
          </div>
        ))
      ) }
    </div>
  );
}
