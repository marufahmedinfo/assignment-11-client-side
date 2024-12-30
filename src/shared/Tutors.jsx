import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Tutors = ({category}) => {
    return (
        <Link to={`/tutors/${category.language}`}
            className="border rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gradient-to-r from-purple-300 to-blue-200 transition"
        >
            <div className="flex items-center">
                <img src={category.image} className='h-14 mr-5' alt="sdjfjasdfjjsa" />
                <div>
                    <h3 className="text-xl font-semibold text-gray-700">{category.language} Tutors</h3>
                    {/* <p className="text-sm text-gray-500">{category.count}</p> */}
                </div>
            </div>
            <span className="text-gray-400 text-lg hover:animate-spin"><FaChevronRight color='black' /></span>
        </Link>
    );
};

export default Tutors;