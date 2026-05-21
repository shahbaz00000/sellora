import React from "react";

const ShowReview = ({ review }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl p-6 border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            {review?.user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-800">
              {review?.user?.name || "Anonymous User"}
            </h4>
            <p className="text-xs text-gray-500">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Badge */}
        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
          Verified
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {review.title}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex text-yellow-400 text-lg">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>{star <= review.rating ? "★" : "☆"}</span>
          ))}
        </div>

        <span className="text-gray-500 text-sm">({review.rating}.0)</span>
      </div>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed text-sm">{review.content}</p>
    </div>
  );
};

export default ShowReview;
