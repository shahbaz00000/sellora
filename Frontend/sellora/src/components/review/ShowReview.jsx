import React from 'react'

const ShowReview = ({ review }) => {
    return (
        <div className="bg-white shadow-md hover:shadow-lg transition duration-300 rounded-2xl p-6 border border-gray-100">

            {/* Header Section */}
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                        {review.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 text-yellow-500 text-lg mb-3">
                {"⭐".repeat(review.rating)}
                <span className="text-gray-600 text-sm">
                    ({review.rating}.0 Rating)
                </span>
            </div>

            {/* Content */}
            <p className="text-gray-700 leading-relaxed">
                {review.content}
            </p>

        </div>
    )
}

export default ShowReview