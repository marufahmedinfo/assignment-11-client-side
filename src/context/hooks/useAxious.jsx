import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://assignment-11-server-kappa-inky.vercel.app',
    withCredentials: true,
})

const useAxious = () => {
    const navigate = useNavigate();
    const { handleLogOut } = useContext(AuthContext);
    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('error caught in interceptor', error);
            if (error.status === 401 || error.status === 403) {
                console.log('need to log out the User')
                handleLogOut()
                    .then(() => {
                        console.log('logged out user')
                        navigate('/login');
                    })
                    .catch(error => console.log(error))
            }
            return Promise.reject(error)
        });
    }, [])
    return axiosInstance;
};

export default useAxious;