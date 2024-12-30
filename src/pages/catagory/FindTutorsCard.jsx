import React from 'react';
import { Link } from 'react-router-dom';

const FindTutorsCard = ({ tutor }) => {
    return (
        <div className="my-4 p-4 border rounded-lg shadow-lg shadow-purple-400 hover:shadow-blue-300 bg-white">
            <img
                src={tutor.image}
                alt={tutor.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
            />


            <h2 className="text-lg font-bold text-center text-gray-800">{tutor.name}</h2>


            <p className="text-sm text-center text-gray-600 mt-2">🌐 Language: {tutor.language}</p>


            <p className="text-md text-center text-gray-600 mt-2">★  {tutor.review} reviews</p>

            <div className="text-center mt-4">
                <Link to={`/find_tutors/${tutor._id}`}><button className="px-4 py-2 bg-gradient-to-r from-purple-300 to-blue-200 rounded-lg hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-200">
                    View Details
                </button></Link>
            </div>
        </div>
    );
};

export default FindTutorsCard;