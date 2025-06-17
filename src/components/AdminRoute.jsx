// components/AdminRoute.jsx
import { useUser } from '@clerk/clerk-react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const { user, isLoaded } = useUser();
  const role = user?.publicMetadata?.role;

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (role !== 'admin') { 
    // Redirect non-admin users to home
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;