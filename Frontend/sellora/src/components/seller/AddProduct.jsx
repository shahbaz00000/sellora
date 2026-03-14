import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"

const AddProduct = () => {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const brandRef = useRef();
    const imageRef = useRef();
    const priceRef = useRef();
    const categoryRef = useRef();
    const ratingRef = useRef();

    const navigate = useNavigate()

    const { token } = useSelector((state) => state.auth);
    console.log(token)

    const handleProductForm = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", titleRef.current.value);
        formData.append("description", descriptionRef.current.value);
        formData.append("brand", brandRef.current.value);
        formData.append("image", imageRef.current.files[0]);
        formData.append("price", priceRef.current.value);
        formData.append("category", categoryRef.current.value);
        formData.append("rating", ratingRef.current.value);
        try {
            const res = await fetch("http://localhost:3000/api/seller/product", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });
            const data = await res.json();
            if (res.status === 201) {
                console.log(data);
                navigate("/home")
            } else {
                throw new Error(data.errorMessage)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <form
                onSubmit={handleProductForm} encType="multipart/form-data"
                className="min-h-screen flex items-center justify-center bg-slate-100 p-6"
            >
                <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-lg space-y-5">

                    <h2 className="text-2xl font-bold text-center text-slate-800">
                        Create Product
                    </h2>

                    <input
                        type="text"
                        placeholder="Enter Title"
                        ref={titleRef}
                        className="w-full border border-slate-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-sky-400 outline-none"
                    />

                    <textarea
                        placeholder="Enter Description"
                        ref={descriptionRef}
                        rows="3"
                        className="w-full border border-slate-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-sky-400 outline-none resize-none"
                    ></textarea>

                    <input
                        type="text"
                        placeholder="Enter Brand"
                        ref={brandRef}
                        className="w-full border border-slate-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-sky-400 outline-none"
                    />

                    <input
                        type="file"
                        ref={imageRef}
                        className="w-full border border-slate-300 px-3 py-2 rounded-md bg-white file:bg-sky-400 file:text-white file:px-4 file:py-1 file:rounded-md file:border-0 file:cursor-pointer hover:file:bg-sky-500"
                    />

                    <input
                        type="number"
                        placeholder="Enter Price"
                        ref={priceRef}
                        className="w-full border border-slate-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-sky-400 outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Enter Category"
                        ref={categoryRef}
                        className="w-full border border-slate-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-sky-400 outline-none"
                    />

                    <input
                        type="number"
                        step="0.1"
                        placeholder="Enter Rating"
                        ref={ratingRef}
                        className="w-full border border-slate-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-sky-400 outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-sky-400 text-white py-2 rounded-md font-semibold hover:bg-sky-500 transition duration-200"
                    >
                        Create Product
                    </button>
                </div>
            </form>

        </>
    )
}

export default AddProduct
