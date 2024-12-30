import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import FindTutors from '../components/pPage/FindTutors';
import AddTutorials from '../components/pPage/AddTutorials';
import MyTutorials from '../components/pPage/MyTutorials';
import MyBookTutors from '../components/pPage/MyBookTutors';
import Error from '../pages/Error';
import CatagoryDetails from '../pages/catagory/CatagoryDetails';
import TutorsDetails from '../pages/catagory/TutorsDetails';
import UpdateTutorials from '../components/pPage/UpdateTutorials';
import PrivetRout from './PrivetRout';

const router = createBrowserRouter([
{
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/find_tutors',
            element: <FindTutors />
        },
        {
            path: '/find_tutors/:id',
            element: <PrivetRout><TutorsDetails /></PrivetRout>,
            loader: ({params})=> fetch(`https://assignment-11-server-kappa-inky.vercel.app/tutor/${params.id}`)
        },
        {
            path: '/tutors/:language',
            element: <CatagoryDetails />
        },
        {
            path: '/Add_Tutorials',
            element: <PrivetRout><AddTutorials /></PrivetRout>
        },
        {
            path: '/My_Tutorials',
            element: <PrivetRout><MyTutorials/></PrivetRout>
        },
        {
            path: '/tutorsUpdate/:id',
            element: <UpdateTutorials />,
            loader: ({params}) => fetch(`https://assignment-11-server-kappa-inky.vercel.app/tutor/${params.id}`)
        },
        {
            path: '/My_booked_tutors',
            element: <PrivetRout><MyBookTutors /></PrivetRout>
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/login',
            element: <Login />
        }
    ]
}
])
export default router;