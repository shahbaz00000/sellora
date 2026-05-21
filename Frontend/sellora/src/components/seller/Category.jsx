import React, { useRef } from "react";

const Category = () => {
  const nameRef = useRef();

  const handleCaategory = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;

    const res = await fetch("http://localhost:3000/api/seller/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleCaategory}
        className="min-h-screen flex items-center justify-center bg-slate-100 p-6"
      >
        <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg space-y-5">
          <h2 className="text-2xl font-bold text-center text-slate-800">
            Add Category
          </h2>

          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Category Name
            </label>

            <input
              type="text"
              placeholder="Enter Category"
              ref={nameRef}
              className="w-full border border-slate-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-sky-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-400 text-white py-2 rounded-md font-semibold hover:bg-sky-500 transition duration-200"
          >
            Add Category
          </button>
        </div>
      </form>
    </>
  );
};

export default Category;
