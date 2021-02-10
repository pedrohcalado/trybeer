import React, { useState, useEffect } from 'react';

export default function AdminSaleDetailsUseeffect(id, getSaleById) {
  const [saleDetails, setSaleDetails] = useState('');
  return useEffect(() => {
      getSaleById(id).then((response) => setSaleDetails(response));
    }, [id]);
}
