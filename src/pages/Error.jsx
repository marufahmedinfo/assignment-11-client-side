import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
                        Oops!
                    </h1>
                    <p className="text-2xl mt-4 font-semibold text-gray-800">
                        404 - PAGE NOT FOUND
                    </p>
                    <p className="text-lg mt-2 text-gray-600">
                        The page you are looking for might have been removed, its name changed, or is temporarily unavailable.
                    </p>
                    <Link to={'/'}>        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-200 to-purple-300 text-white font-bold rounded-lg shadow-md transition duration-300">Go to Homepage </button>
                    </Link>      </div>
            </div>
        </div>
    );
};

export default Error;