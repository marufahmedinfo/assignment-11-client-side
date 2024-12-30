import React from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';

const PrivetRout = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
      

    if(loading){
        return <div className='flex justify-center items-center'><MoonLoader color='purple' size={150} /></div>
    }

    if(user){
        return children
    }
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};

export default PrivetRout;