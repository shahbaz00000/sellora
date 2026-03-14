import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const userTypeRef = useRef()

    const navigate = useNavigate();

    // Error handle State
    const [errorMessage,setErrorMessage] = useState("");

    const handleSignupForm = async (e) => {
        e.preventDefault();

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        const userType = userTypeRef.current.value;
        try {
            const res = await fetch("http://localhost:3000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ firstName, lastName, email, password, confirmPassword, userType })
            });
            const data = await res.json();
            if (res.status === 201) {
                console.log(data);
                setErrorMessage("")
                navigate("/login")
            } else {
                throw new Error(data.errorMessage)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
          <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={handleSignupForm}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-slate-800">
          Create a New Account
        </h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded-md text-sm">
            {errorMessage}
          </div>
        )}

        <input
          type="text"
          placeholder="Enter First Name"
          ref={firstNameRef}
          className="w-full border border-slate-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <input
          type="text"
          placeholder="Enter Last Name"
          ref={lastNameRef}
          className="w-full border border-slate-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-sky-400 outline-none"
        />

        <input
          type="email"
          placeholder="Enter Email"
          ref={emailRef}
          className="w-full border border-slate-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-sky-400 outline-none"
        />

        <input
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
          className="w-full border border-slate-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-sky-400 outline-none"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
          className="w-full border border-slate-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-sky-400 outline-none"
        />

        <select
          ref={userTypeRef}
          className="w-full border border-slate-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-sky-400 outline-none bg-white"
          defaultValue=""
        >
          <option value="" disabled>
            Select User Type
          </option>
          <option value="seller">Seller</option>
          <option value="customer">Customer</option>
        </select>

        <button
          type="submit"
          className="w-full bg-sky-400 text-white py-2 rounded-md font-semibold hover:bg-sky-500 transition"
        >
          Signup
        </button>
      </form>
    </div>
    )
}

export default Signup
