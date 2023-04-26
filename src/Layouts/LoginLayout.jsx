import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Pages/Shared/Navigation/Navigation';

const LoginLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;