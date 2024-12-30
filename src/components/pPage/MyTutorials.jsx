import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiSolidPencil } from 'react-icons/bi';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAxious from '../../context/hooks/useAxious';


const MyTutorials = () => {
    const { user } = useContext(AuthContext);
    const [myTutorial, setMyTutorial] = useState(null);
    const axousSecure = useAxious();
    useEffect(() => {
        // axios.get(`https://assignment-11-server-kappa-inky.vercel.app/mytutors/${user?.email}`, {
        //     withCredentials: true
        // })
        //     .then(res => {
        //         setMyTutorial(res.data)
        //     })
        //     .catch(err => { })
        axousSecure.get(`/mytutors/${user?.email}`)
            .then(res => {
                setMyTutorial(res.data)
            })
            .catch(err => { })
    }, [user]);



    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-11-server-kappa-inky.vercel.app/tutors/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tutorial has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = myTutorial.filter(equip => equip._id !== _id);
                        setMyTutorial(remaining);
                    })
            }
        });
    }



    return (
        <div className='my-16'>
            <h1 className='text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300'>My Tutorials</h1>



            <div className="container mx-auto mt-10">
                <table className="min-w-full bg-white border border-gray-300 shadow-lg">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 border-b">Tutor Image</th>
                            <th className="py-3 px-4 border-b">Name</th>
                            <th className="py-3 px-4 border-b">Language</th>
                            <th className="py-3 px-4 border-b">Price</th>
                            <th className="py-3 px-4 border-b">Description</th>
                            <th className="py-3 px-4 border-b">Review</th>
                            <th className="py-3 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myTutorial?.map((tutor) => (
                            <tr key={tutor._id} className="text-center">
                                <td className="py-3 px-4 border-b">
                                    <img
                                        src={tutor.image}
                                        alt={tutor.name}
                                        className="h-12 w-12 rounded-full mx-auto"
                                    />
                                </td>
                                <td className="py-3 px-4 border-b font-bold text text-purple-400">{tutor.name}</td>
                                <td className="py-3 px-4 border-b">{tutor.language}</td>
                                <td className="py-3 px-4 border-b text-blue-300">${tutor.price}</td>
                                <td className="py-3 px-4 border-b">{tutor.description.length > 50
                                    ? tutor.description.slice(0, 50) + "..."
                                    : tutor.description}</td>
                                <td className="py-3 px-4 border-b">{tutor.review}</td>
                                <td className="py-3 px-4 border-b space-x-2 space-y-2">
                                    <Link to={`/tutorsUpdate/${tutor?._id}`}>
                                        <button
                                            className="bg-blue-300 text-white px-4 py-2 rounded hover:bg-blue-500"
                                        >
                                            <BiSolidPencil size={30} />
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(tutor._id)}
                                        className="bg-gradient-to-r from-purple-700 to-red-600 text-white px-4 py-2 rounded"
                                    >
                                        <RiDeleteBin5Line size={30} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTutorials;