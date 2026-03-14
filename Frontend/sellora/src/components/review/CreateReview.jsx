import React, { useRef, useState } from 'react'

const CreateReview = ({ productId }) => {

    const titleRef = useRef();
    const contentRef = useRef();
    const ratingRef = useRef();

    const handleReviewForm = async (e) => {
        e.preventDefault();
        console.log(productId)

        const title = titleRef.current.value;
        const content = contentRef.current.value;
        const rating = ratingRef.current.value;

        const token = localStorage.getItem("token");
        try {
            const res = await fetch(`http://localhost:3000/api/customer/${productId}/review`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ title, content, rating })
            });
            const data = await res.json();
            if (res.status === 201) {
                console.log(data);
            } else {
                throw new Error(data.errorMessage)
            }
        } catch (error) {
            console.log(error.message)
        }
        titleRef.current.value = "";
        contentRef.current.value = "";
        ratingRef.current.value = "";
    }

    return (
        <>
            <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">

                <form
                    onSubmit={handleReviewForm}
                    className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-6"
                >

                    <h2 className="text-2xl font-bold text-gray-800 text-center">
                        Write a Review
                    </h2>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Review Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter title"
                            ref={titleRef}
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Review Content
                        </label>
                        <textarea
                            name="content"
                            placeholder="Write your review..."
                            rows="4"
                            ref={contentRef}
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Rating (1–5)
                        </label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="5"
                            ref={ratingRef}
                            placeholder="Enter rating"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Submit Review
                    </button>

                </form>
            </div>
        </>
    )
}

export default CreateReview