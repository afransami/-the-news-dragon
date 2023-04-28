import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { FaOsi } from 'react-icons/fa';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);

    if(loading){
        return <div>Loading....             
            <FaOsi />
        </div>
    }
    
    if(user){
        return children;
    }
    return <Navigate to= "/login" state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;