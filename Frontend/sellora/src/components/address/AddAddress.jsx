import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { addressContext } from '../../stores/reducer/AddressContext';

const AddAddress = () => {

    const navigate = useNavigate()

    const nameRef = useRef();
    const areaRef = useRef();
    const mobileNoRef = useRef();
    const landMarkRef = useRef();
    const cityRef = useRef();
    const pincodeRef = useRef();
    const stateRef = useRef();

    const { addAddress } = useContext(addressContext)

    const handleAddAddressForm = async (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const area = areaRef.current.value;
        const landMark = landMarkRef.current.value;
        const mobileNo = mobileNoRef.current.value;
        const city = cityRef.current.value;
        const state = stateRef.current.value;
        const pincode = pincodeRef.current.value;

        const token = localStorage.getItem("token");

        try {
            const res = await fetch("http://localhost:3000/api/customer/address", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    name,
                    area,
                    mobileNo,
                    city,
                    landMark,
                    state,
                    pincode
                })
            });

            const data = await res.json();

            if (res.status === 201) {
                addAddress(data.address);
                alert("address was added successfully")
                navigate("/address");
            } else {
                throw new Error(data.errorMessage);
            }

        } catch (error) {
            console.log(error.message);
            alert("Something went wrong");
        }
    };

    return (
        <form
            onSubmit={handleAddAddressForm}
            className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3">
                Add New Address
            </h2>

            {/* Full Name */}
            <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                    Full Name
                </label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    ref={nameRef}
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
            </div>

            {/* Area */}
            <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                    Area / Street
                </label>
                <textarea
                    placeholder="Enter Area"
                    ref={areaRef}
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                ></textarea>
            </div>

            {/* Landmark */}
            <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                    Landmark
                </label>
                <input
                    type="text"
                    placeholder="Enter Landmark"
                    ref={landMarkRef}
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                    Mobile Number
                </label>
                <input
                    type="text"
                    placeholder="Enter Mobile No"
                    ref={mobileNoRef}
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
            </div>

            {/* City + Pincode (2 Column Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-600">
                        City
                    </label>
                    <input
                        type="text"
                        placeholder="Enter City"
                        ref={cityRef}
                        className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-600">
                        Pincode
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Pincode"
                        ref={pincodeRef}
                        className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                    />
                </div>
            </div>

            {/* State */}
            <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-600">
                    State
                </label>
                <input
                    type="text"
                    placeholder="Enter State"
                    ref={stateRef}
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
            </div>

            {/* Button */}
            <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition duration-300"
            >
                Add Address
            </button>
        </form>
    )
}

export default AddAddress