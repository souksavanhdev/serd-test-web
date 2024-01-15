import React from 'react'
import { Outlet, useNavigate, Navigate } from "react-router-dom"
import Footer from '../components/Footer';

export default function PrivateRoute() {
    return (
        <div className=' relative h-screen w-full'>
            <Outlet />
            <div className=' absolute bottom-0 w-full'>
                <Footer />
            </div>
        </div>
    );
}
