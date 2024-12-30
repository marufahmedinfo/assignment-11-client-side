import React from "react";
import { Link } from "react-router-dom";
import grpup from '../assets/img/group.jpg'

const PaidToTeach = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-purple-400 to-blue-300 text-white rounded-lg p-6 md:p-10 my-10">
            <div className="flex flex-1">
                <img
                    src={grpup}
                    alt="Get paid to teach online"
                    className="rounded-lg shadow-md"
                />
            </div>
            <div className="flex flex-1 flex-col md:ml-8 mt-6 md:mt-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Get paid to teach online
                </h2>
                <p className="mb-6 text-lg">
                    Connect with thousands of learners around the world and teach from
                    your living room.
                </p>
                <Link to={'/Add_Tutorials'}><button className="px-6 py-3 bg-gradient-to-r from-purple-900 to-blue-700 text-white font-semibold rounded-lg shadow hover:bg-gray-800 animate-bounce">
                    Create a tutor profile now
                </button></Link>
            </div>
        </div>
    );
};

export default PaidToTeach;
