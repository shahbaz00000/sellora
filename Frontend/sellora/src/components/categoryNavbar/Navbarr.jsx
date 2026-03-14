import React from "react";
import { Link } from "react-router-dom";
import { GiClothes } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { MdGirl } from "react-icons/md";
import { FaRegGrinBeam } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaKitchenSet } from "react-icons/fa6";
import { FcMultipleDevices } from "react-icons/fc";
import { FaBook } from "react-icons/fa6";

const Navbarr = () => {
    return (
        <nav className="sticky top-14 z-50 bg-white shadow-md border-b border-gray-200 flex justify-around items-center py-3">

            <Link
                to="/cloth"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <GiClothes size={24} />
            </Link>

            <Link
                to="/electronic"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <FcMultipleDevices size={24} />
            </Link>

            <Link
                to="/girlCloth"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <MdGirl size={24} />
            </Link>

            <Link
                to="/beauti"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <FaRegGrinBeam size={24} />
            </Link>

            <Link
                to="/shopping"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <FaCartShopping size={24} />
            </Link>

            <Link
                to="/kitchen"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <FaKitchenSet size={24} />
            </Link>

            <Link
                to="/book"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <FaBook size={24} />
            </Link>
            <Link
                to="/cloth"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <GiClothes size={24} />
            </Link>

            <Link
                to="/electronic"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <FcMultipleDevices size={24} />
            </Link>

            <Link
                to="/girlCloth"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <MdGirl size={24} />
            </Link>

            <Link
                to="/beauti"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <FaRegGrinBeam size={24} />
            </Link>

            <Link
                to="/shopping"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <FaCartShopping size={24} />
            </Link>

            <Link
                to="/kitchen"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <FaKitchenSet size={24} />
            </Link>

            <Link
                to="/book"
                className="flex flex-col items-center p-2 rounded-lg text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-all duration-300"
            >
                <FaBook size={24} />
            </Link>

        </nav>
    );

};

export default Navbarr;