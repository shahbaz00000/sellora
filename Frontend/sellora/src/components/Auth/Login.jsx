import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearError, login, setError } from '../../stores/slice/authslice';


const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  // errro Handler state
 const {errorMessage} = useSelector((state) => state.auth)

  const dispatch = useDispatch() 

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if(res.status ===200){
        console.log(data);
        dispatch(clearError());
        dispatch(login(data));
        navigate("/home");
      }else{
        dispatch(setError(data.errorMessage));
      }
    } catch (error) {
      dispatch(setError("internal server error"));
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <form
        onSubmit={handleLoginForm}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-slate-800">
          Login Account
        </h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded-md text-sm">
            {errorMessage}
          </div>
        )}
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

        <button
          type="submit"
          className="w-full bg-sky-400 text-white py-2 rounded-md font-semibold hover:bg-sky-500 transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
