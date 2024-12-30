import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const UpdateTutorials = () => {
    const navigate = useNavigate();
    // const {user} = useContext(AuthContext);
    const updateData = useLoaderData();
    // console.log(updateData)
    const { name, email, image, language, price, review, details, description, _id } = updateData;
    const handleUpdateTutors = (e) => {
        e.preventDefault();
        const formData = e.target;
        const name = formData.name.value;
        const email = formData.email.value;
        const image = formData.image.value;
        const language = formData.language.value;
        const priceStr = formData.price.value;
        const price = parseInt(priceStr)
        const reviewStr = formData.review.value;
        const review = parseInt(reviewStr)
        const details = formData.details.value;
        const description = formData.description.value;

        const data = { name, email, image, language, price, review, details, description };
        console.log(data)

        axios.put(`https://assignment-11-server-kappa-inky.vercel.app/tutor/${_id}`, data)
            .then(res => {

            Swal.fire({
                title: 'Success!',
                text: 'Your lesson Update Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            })
navigate('/My_Tutorials')
            })
            .catch(err => {  })
    }
    return (
        <div className="mx-auto mt-10 bg-white p-6 rounded-lg shadow my-16">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 mb-4 text-center ">Update Tutorial</h2>
        <form onSubmit={handleUpdateTutors}>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                <div className="mb-4">
                    <label className="block text-xl font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        // value={user?.displayName}
                        defaultValue={name}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-600"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-xl font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        // value={user?.email}
                        defaultValue={email}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-600"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-xl font-medium text-gray-700 mb-1">Image URL</label>
                <input
                    type="text"
                    name="image"
                    // value={user?.photoURL}
                    defaultValue={image}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Enter tutorial image URL"
                    required
                />
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
                <div className="mb-4">
                    <label className="block text-xl font-medium text-gray-700 mb-1">Language</label>
                    <select
                        name="language"
                        className="w-full px-3 py-2 border border-gray-300 rounded bg-white"
                        required
                        defaultValue={language}
                    >
                        <option disabled>Select a language</option>
                        <option value="English">English</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Russian">Russian</option>
                        <option value="Italian">Italian</option>
                        <option value="Arabic">Arabic</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-xl font-medium text-gray-700 mb-1">Price</label>
                    <input
                        type="number"
                        name="price"
                        defaultValue={price}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        placeholder="Enter price"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-xl font-medium text-gray-700 mb-1">Review</label>
                    <input
                        type="number"
                        defaultValue={review}
                        name="review"
                        value="0"
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-600"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-xl font-medium text-gray-700 mb-1">Description</label>
                <textarea
                    name="description"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Enter description"
                    defaultValue={description}
                    rows="3"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-xl font-medium text-gray-700 mb-1">Details</label>
                <textarea
                    name="details"
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Enter details"
                    defaultValue={details}
                    rows="3"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-300 to-blue-200 text-white py-2 px-4 text-xl rounded"
            >
                Update Now
            </button>
        </form>
    </div>
    );
};

export default UpdateTutorials;