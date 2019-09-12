import React, { lazy, Suspense } from 'react'

const AdminDashboard = lazy(() => {
    return Promise.all([
      import('./Suspence'),
      new Promise(resolve => setTimeout(resolve, 1500))
    ])
    .then(([moduleExports]) => moduleExports);
});

const AdminPage = () => {
    return (
        <AdminDashboard/>
    )
};

export default AdminPage;