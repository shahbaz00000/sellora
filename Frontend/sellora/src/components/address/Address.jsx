import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addressContext } from '../../stores/reducer/AddressContext';
import { useDispatch } from 'react-redux';


const Address = () => {

    const navigate = useNavigate();

    const [addresses, setAddress] = useState([]);

    const handleAddAddress = (e) => {
        e.preventDefault();
        navigate("/addAddress")
    }
    useEffect(() => {
        const fetchAddress = async () => {
            const token = localStorage.getItem("token");
            try {
                const res = await fetch("http://localhost:3000/api/customer/addresses", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await res.json();
                if (res.status === 200) {
                    console.log(data)
                    setAddress(data.addresses)
                } else {
                    throw new Error(data.errorMessage)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAddress()
    }, []);

    // Order 
    const handleOrder = async (addressId) => {
        const token = localStorage.getItem("token");
        try {
            const res = await fetch(`http://localhost:3000/api/customer/order/${addressId}`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await res.json();
            if (res.status === 201) {
                console.log(data)
                navigate("/order")
            } else {
                throw new Error(data.errorMessage);
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-6">

                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        My Addresses
                    </h2>

                    <button
                        onClick={handleAddAddress}
                        className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg shadow-md transition duration-300"
                    >
                        + Add Address
                    </button>
                </div>

                {/* Address List */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {addresses.length > 0 ? (
                        addresses.map((address, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300 border border-gray-200"
                            >
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    {address.fullName}
                                </h3>

                                <p className="text-gray-600 text-sm">
                                    {address.houseNo}, {address.area}
                                </p>

                                <p className="text-gray-600 text-sm">
                                    {address.city}, {address.state}
                                </p>

                                <p className="text-gray-600 text-sm mb-3">
                                    Pincode: {address.pincode}
                                </p>

                                <p className="text-gray-500 text-sm">
                                    📞 {address.mobileNo}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex justify-between mt-4">
                                    <button onClick={() => handleOrder(address._id)}
                                        className="text-blue-500 hover:text-blue-700 text-lg font-medium">
                                        Place Order with This Address
                                    </button>

                                    <button className="text-red-500 hover:text-red-700 text-sm font-medium">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No addresses found.</p>
                    )}
                </div>

            </div>
        </>
    )
}

export default Address