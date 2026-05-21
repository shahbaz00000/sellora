import React from 'react'

const UnknownPages = () => {
  return (
     <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      
      {/* Big 404 */}
      <h1 className="text-7xl font-extrabold tracking-wide text-gray-300">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-lg text-gray-400 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full 
        hover:bg-gray-200 transition duration-300 shadow-lg"
      >
        Go Back Home
      </button>

      {/* Optional subtle glow effect */}
      <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full top-20"></div>
    </div>
  )
}

export default UnknownPages