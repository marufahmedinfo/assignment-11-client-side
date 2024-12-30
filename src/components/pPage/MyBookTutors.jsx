import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';


const MyBookTutors = () => {
  const [tutors, setTutors] = useState([]);
  const {user} = useContext(AuthContext);
  const [bookTutor, setBookTutor] = useState(null);
  useEffect(()=>{
    axios.get(`https://assignment-11-server-kappa-inky.vercel.app/bookTutor/${user?.email}`)
    .then(res=>{
      setBookTutor(res.data);
    })
    .catch(err => {  })
  },[user]);

  
  
    return (
    <div className="px-4 py-6 my-16">
    <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 font-bold mb-6">Booked Tutors</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Tutor Profile</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Language</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Reviews</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookTutor?.map((tutor) => (
            <tr key={tutor._id}>
              <td className="py-2 px-4 border-b text-center">
                <img
                  src={tutor.image}
                  alt="Tutor"
                  className="w-16 h-16 rounded-full mx-auto object-cover"
                />
              </td>
              <td className="py-2 px-4 border-b text-center font-bold text-purple-500">{tutor.name}</td>
              <td className="py-2 px-4 border-b text-center text-blue-400">{tutor.language}</td>
              <td className="py-2 px-4 border-b text-center">${tutor.price}</td>
              <td className="py-2 px-4 border-b text-center">{tutor.review}</td>
              <td className="py-2 px-4 border-b text-center">
                <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Review</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
    );
};

export default MyBookTutors;