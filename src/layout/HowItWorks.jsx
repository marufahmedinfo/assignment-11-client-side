import React from "react";
import wr1 from '../assets/img/workgroup (1).jpeg'
import wr2 from '../assets/img/workgroup (1).jpg'
import wr3 from '../assets/img/workgroup (2).jpeg'

const HowItWorks = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-200">How Preply works:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-lg shadow-purple-500 hover:shadow-blue-500">
          <div className="flex items-center mb-4">
            <span className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-300 text-white font-bold mr-3">
              1
            </span>
            <h3 className="text-xl font-bold">Find your tutor.</h3>
          </div>
          <img
            src={wr1}
            alt="Find your tutor"
            className="w-full h-40 object-cover mb-4 rounded-lg"
          />
          <p className="text-gray-600">We’ll connect you with a tutor who will motivate, challenge, and inspire you.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg shadow-purple-500 hover:shadow-blue-500">
          <div className="flex items-center mb-4">
            <span className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-300 text-white font-bold mr-3">
              2
            </span>
            <h3 className="text-xl font-bold">Start learning.</h3>
          </div>
          <img
            src={wr2}
            alt="Start learning"
            className="w-full h-40 object-cover mb-4 rounded-lg"
          />
          <p className="text-gray-600">Your tutor will guide the way through your first lesson and help you plan your next steps.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg shadow-purple-500 hover:shadow-blue-500">
          <div className="flex items-center mb-4">
            <span className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-300 text-white font-bold mr-3">
              3
            </span>
            <h3 className="text-xl font-bold">Speak. Read. Write. Repeat.</h3>
          </div>
          <img
            src={wr3}
            alt="Speak. Read. Write. Repeat."
            className="w-full h-40 object-cover mb-4 rounded-lg"
          />
          <p className="text-gray-600">Choose how many lessons you want to take each week and get ready to reach your goals!</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
