import React from 'react'
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({childern}) => {
    const adminToken = localStorage.getItem("adminToken");
    if(!token) return <Navigate to="/admin/login" replace/>

  return childern;
}

export default AdminProtectedRoute
