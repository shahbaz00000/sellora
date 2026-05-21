import React, { useRef, useState } from "react";

const CreateReview = ({ productId }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const ratingRef = useRef();

  const handleReviewForm = async (e) => {
    e.preventDefault();
    console.log(productId);

    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const rating = ratingRef.current.value;

    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `http://localhost:3000/api/customer/${productId}/review`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, content, rating }),
        },
      );
      const data = await res.json();
      if (res.status === 201) {
        console.log(data);
      } else {
        throw new Error(data.errorMessage);
      }
    } catch (error) {
      console.log(error.message);
    }
    titleRef.current.value = "";
    contentRef.current.value = "";
    ratingRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex justify-center items-center p-6">
      <form
        onSubmit={handleReviewForm}
        className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-full max-w-xl space-y-6 border border-gray-200"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            ✍️ Write a Review
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Share your experience with this product
          </p>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Review Title
          </label>
          <input
            type="text"
            ref={titleRef}
            placeholder="Summarize your experience"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Review Content
          </label>
          <textarea
            rows="4"
            ref={contentRef}
            placeholder="What did you like or dislike?"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
          />
        </div>

        {/* Rating Stars */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Rating
          </label>

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                onClick={() => (ratingRef.current.value = num)}
                className="cursor-pointer text-2xl text-gray-300 hover:text-yellow-400 transition"
              >
                ★
              </span>
            ))}
          </div>

          <input type="number" ref={ratingRef} hidden />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          Submit Review 🚀
        </button>
      </form>
    </div>
  );
};

export default CreateReview;
