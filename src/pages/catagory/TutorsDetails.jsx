import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const TutorsDetails = () => {
  const { user } = useContext(AuthContext);
  const tutor = useLoaderData();
  const { _id, name, language, email, image, price, review } = tutor;
  const handleBookTutor = (id) => {
    const bookInfo = {
      tutorId: _id,
      name,
      language,
      price,
      image,
      review,
      email,
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
    <div className="my-16 max-w-4xl mx-auto p-4 border rounded-lg shadow-lg flex items-center bg-white">
      <div className="flex-1">
        <img
          src={tutor.image}
          alt={tutor.name}
          className="w-40 h-40 rounded object-cover mr-6"
        />

        {/* Header */}
        <div className="flex gap-3  items-center">
          <h2 className="text-xl font-bold text-gray-800">{tutor.name}</h2>
          <span className="text-gray-500 text-md">{tutor.language}</span>
        </div>

        {/* Details */}
        <div className="mt-2 text-sm text-gray-600">
          <p>⭐ {tutor.rating} | {tutor.review} reviews</p>
          <p>💬 {tutor.description}</p>
          <p>📚 {tutor.details}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-blue-500">${tutor.price}</span>
          <div>
            <button onClick={() => handleBookTutor(_id)} className="bg-gradient-to-r from-purple-400 to-blue-300 hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-400 text-white px-4 py-2 rounded-md mr-2">
              Book Trial Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default TutorsDetails;