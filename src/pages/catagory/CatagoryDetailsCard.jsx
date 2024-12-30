import axios from 'axios';
import React, { useContext } from 'react';
import { IoLanguageSharp } from 'react-icons/io5';
import { MdLanguage } from 'react-icons/md';
import { PiStudentFill } from 'react-icons/pi';
import Swal from 'sweetalert2';
import AuthContext from '../../context/AuthContext';

const CatagoryDetailsCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { name, review, language, image, details, rating, price, description, _id } = item;
    const handleBookTutor = (id) => {
        const bookInfo = {
            tutorId: _id,
            name,
            language,
            price,
            image,
            review,
            Bookemail: user?.email
        };
        axios.post('https://assignment-11-server-kappa-inky.vercel.app/bookTutor', bookInfo)
            .then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You Have Successfully Booked a Tutor",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => { });
    }
    return (
        <div className="bg-white rounded-lg md:h-52 h-auto shadow-md p-4 flex  space-x-4 max-w-3xl">
            {/* Profile Image */}
            <img
                src={image}
                alt="Tutor"
                className="w-20 h-24 rounded object-cover"
            />

            {/* Info Section */}
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                    <p className="text-yellow-500 font-semibold flex items-center flex-col">
                        <span className='text-lg text-gray-500 ml-1 flex'>★ {rating}</span>
                        <span className="text-sm text-gray-500 ml-1">{review} Reviews</span>
                    </p>
                </div>
                <button className="text-sm text-gray-700 bg-purple-200 px-3 rounded-xl">Super tutor</button>
                <p className="text-sm text-gray-600  flex gap-2 mt-1">
                    <MdLanguage /> <strong>Language:</strong> {language}
                </p>
                <p className="text-sm text-gray-600 flex gap-2 mt-1">
                    <PiStudentFill /> 24 active students • 2,792 lessons
                </p>
                <p className="text-sm text-gray-600 flex gap-2 mt-1">
                    <IoLanguageSharp size={15} /> Speaks: {description.length > 50
    ? description.slice(0, 50) + "..."
    : description}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                {details.length > 50
    ? details.slice(0, 50) + "..."
    : details}
                </p>
            </div>

            {/* Pricing and Action */}
            <div className="text-center">
                <p className="text-lg font-bold text-blue-300">BDT {price}</p>
                <p className="text-sm text-gray-500">50-min lesson</p>
                <button onClick={() => handleBookTutor(_id)} className="btn bg-gradient-to-r from-purple-400 to-blue-300 text-white rounded-md px-4 py-2 mt-2 transition">
                    Book trial lesson
                </button>
            </div>
        </div>
    );
};

export default CatagoryDetailsCard;