import React from 'react';
import { useAuth } from '../auth/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();

    return user ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;