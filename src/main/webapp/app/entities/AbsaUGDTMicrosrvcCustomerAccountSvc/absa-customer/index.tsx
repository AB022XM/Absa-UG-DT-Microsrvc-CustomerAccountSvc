import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AbsaCustomer from './absa-customer';
import AbsaCustomerDetail from './absa-customer-detail';
import AbsaCustomerUpdate from './absa-customer-update';
import AbsaCustomerDeleteDialog from './absa-customer-delete-dialog';

const AbsaCustomerRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<AbsaCustomer />} />
    <Route path="new" element={<AbsaCustomerUpdate />} />
    <Route path=":id">
      <Route index element={<AbsaCustomerDetail />} />
      <Route path="edit" element={<AbsaCustomerUpdate />} />
      <Route path="delete" element={<AbsaCustomerDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AbsaCustomerRoutes;
