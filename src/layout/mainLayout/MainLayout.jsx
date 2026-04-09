import React from 'react';
import Navbar from '../../Components/shared/navbar/Navbar';
import { Outlet } from 'react-router';
import HeroPage from '../../Pages/heroPage/HeroPage';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;