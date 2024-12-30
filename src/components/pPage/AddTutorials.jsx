import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddTutorials = () => {
    const { user } = useContext(AuthContext);

    const handleAddTutors = (e) => {
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

        axios.post('https://assignment-11-server-kappa-inky.vercel.app/tutors', data)
            .then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You Have Successfully Tutors Added",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {  })
    }
    return (
        <div className="mx-auto mt-10 bg-white p-6 rounded-lg shadow my-16">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300 mb-4 text-center ">Add Tutorial</h2>
            <form onSubmit={handleAddTutors}>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                    <div className="mb-4">
                        <label className="block text-xl font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={user?.displayName}
                            readOnly
                            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-600"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-xl font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user?.email}
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
                        value={user?.photoURL}
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
                            defaultValue="Select a language"
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
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            placeholder="Enter price"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-xl font-medium text-gray-700 mb-1">Review</label>
                        <input
                            type="number"
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
                        rows="3"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-300 to-blue-200 text-white py-2 px-4 text-xl rounded"
                >
                    Submit
                </button>
            </form>
        </div>




    );
};

export default AddTutorials;