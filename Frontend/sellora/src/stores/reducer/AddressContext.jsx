import { createContext, useReducer } from "react"
import addressReducer from "./AddressProvider";


export const addressContext = createContext();

const initialState = [];

const AddressProvider = ({ children }) => {
    const [addresses, dispatch] = useReducer(addressReducer, initialState);

    const setAddress = (addresses) => {
        dispatch({
            type: "SET-ADDRESS",
            payload: addresses
        });
    };
    const addAddress = (address) => {
        dispatch({
            type: 'ADD-ADDRESS',
            payload: address
        })
    };
    const deleteAddress = (id) => {
        dispatch({
            type: 'DELETE-ADDRESS',
            paylopad: id
        })
    };

    return (
        <addressContext.Provider value={{ addresses, addAddress, setAddress, deleteAddress }}>
            {children}
        </addressContext.Provider>
    );
}

export default AddressProvider