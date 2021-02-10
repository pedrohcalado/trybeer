import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuAdm from '../../components/admin/MenuAdm';
import getSaleById from '../../services/admin/getSaleById';
import AdminSaleDetailsStatus from '../../components/general/AdminSaleDetailsStatus';
import AdminSaleDetailsMap from '../../components/general/AdminSaleDetailsMap';
import AdminSaleDetailsPrice from '../../components/general/AdminSaleDetailsPrice';
import AdminSaleDetailsButton from '../../components/general/AdminSaleDetailsButton';
import '../../css/admin/adminSaleDetailsPage.css';

const token = localStorage.getItem('token') || null;

export default function AdminSaleDetailsPage(props) {
  const [saleDetails, setSaleDetails] = useState('');
  const { id } = props;
  useEffect(() => {
    getSaleById(id).then((response) => setSaleDetails(response));
  }, [id]);
  if (!token) return <Redirect to="/login" />;
  return (
    <div>
      <MenuAdm />
      <div className="adminDetailsBody">
        <AdminSaleDetailsStatus saleDetails={ saleDetails } />
        <AdminSaleDetailsMap saleDetails={ saleDetails } />
        <AdminSaleDetailsPrice saleDetails={ saleDetails } />
        <AdminSaleDetailsButton 
          props={ id } saleDetails={ saleDetails }
          setSaleDetails={ setSaleDetails }
        />
      </div>
    </div>
  );
}

AdminSaleDetailsPage.propTypes = {
  id: PropTypes.string,
};

AdminSaleDetailsPage.defaultProps = {
  id: false,
};
