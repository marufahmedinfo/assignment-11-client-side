import React, { useContext, useEffect, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import LogoImg from '../assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, handleLogOut } = useContext(AuthContext);

  const [myBooked, setMyBooked] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-11-server-kappa-inky.vercel.app/bookTutor/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setMyBooked(data)
      })
  }, []);

  const navbar = <>
    <li className=''><NavLink className={({ isActive }) =>
      `py-3 rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/'}>Home</NavLink></li>
    <li className=''><NavLink className={({ isActive }) =>
      `py-3 rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/find_tutors'}>Find tutors</NavLink></li>
    <li className=''><NavLink className={({ isActive }) =>
      `py-3 rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/Add_Tutorials'}>Add Tutorials</NavLink></li>
    <li className=''><NavLink className={({ isActive }) =>
      `py-3 rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/My_Tutorials'}>My Tutorials</NavLink></li>
    <li className=''><NavLink className={({ isActive }) =>
      `py-3 rounded-2xl ${isActive ? 'underline hover:font-bold font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300' : 'hover:underline hover:text-blue-950 hover:font-bold'}`} to={'/My_booked_tutors'}>My booked tutors</NavLink></li>
  </>

  return (

    <nav className="px-6 flex justify-between items-center sticky top-0 backdrop-blur-lg z-[1]">
      <div className='md:block hidden'>
        <div className='flex items-center'>
          <Link to={'/'}>
            <img src={LogoImg} alt="language exchanges logo" className="h-14" />
          </Link>
          <Link to={'/'}>
            <h1 className='text-2xl font-bold lg:block md:hidden md:ml-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300'>Language Exchange</h1>
          </Link>
        </div>
      </div>
      <div>
        <div tabIndex={0} role="button" className="md:hidden" onClick={() => setOpen(!open)}>
          {
            open === true ? <FaWindowClose className="text-3xl" /> : <IoMdMenu className="text-3xl" />
          }


        </div>
        <ul tabIndex={0} className={`md:flex gap-7 absolute duration-1000 md:static
            ${open ? "top-7 left-14" : "-top-40 left-14"} px-6`}>

          {navbar}

        </ul>
      </div>
      <div className='flex items-center'>

        {
          user && user?.email ?


            <div className="flex items-center gap-2">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  hover:bg-gradient-to-r from-purple-300 to-blue-200">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item">{myBooked?.length}</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                  <div className="card-body">
                    <span className="text-lg font-bold">My Booked Item : {myBooked?.length}</span>
                    <div className="card-actions">
                      <Link to={'/My_booked_tutors'}><button className="btn bg-gradient-to-r from-purple-400 to-blue-300 text-white btn-block">View My Booked Tutors</button></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end z-[1]">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar  hover:bg-gradient-to-r from-blue-200 to-purple-300">
                  <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                    <img referrerPolicy='no-referrer' src={user?.photoURL} className="h-20 w-16 rounded-full object-cover" alt="" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <li>
                    <a className="justify-between text-2xl font-bold">
                      {user?.displayName}
                    </a>
                  </li>
                  <button onClick={handleLogOut} className='btn bg-gradient-to-r from-purple-400 to-blue-300 text-white'>Logout</button>
                </ul>
              </div>
            </div>


            :



            <div className='flex gap-5'>
              <Link to={'/register'}><button className='btn bg-gradient-to-r from-purple-400 to-blue-300 text-white'>Register</button></Link>
              <Link to={'/login'}><button className='btn bg-gradient-to-r from-blue-300 to-purple-400 text-white'>Login</button></Link>

            </div>
        }

      </div>
    </nav>


  );
};

export default Navbar;