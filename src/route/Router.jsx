import React, { useState, useEffect } from 'react'
import { useRoutes, Outlet, Navigate, useNavigate, useLocation } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';



export default function Router() {
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            // If the current path is "/", redirect to "/dashboard"
            navigate("/home");
        }
    }, [location.pathname, navigate]);

    return useRoutes([
        {
            element: <PrivateRoute />,
            children: [
                {
                    path: "/home",
                    element: <Home />,
                },
                {
                    path: "/profile",
                    element: <Profile />,
                },
            ]
        },
        {
            path: '*',
            element: <h1>404</h1>
        },
    ])
}
