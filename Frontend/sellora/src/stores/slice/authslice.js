import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: localStorage.getItem("token")?true:false,
    token:localStorage.getItem("token") || null,
    userType:localStorage.getItem("userType") || null,
    errorMessage:null
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.userType = action.payload.userType;

            localStorage.setItem("token",action.payload.token);
            localStorage.setItem("userType",action.payload.userType);
        },
        logout:(state)=>{
            state.isLoggedIn = false;
            state.token = null;
            state.userType = null;

            localStorage.removeItem("token");
            localStorage.removeItem("userType");
        },
        setError:(state,action)=>{
            state.errorMessage = action.payload;
        },
        clearError:(state)=>{
            state.errorMessage = null;
        }
    },
});
export const {login,logout,setError,clearError} = authSlice.actions;
export default authSlice.reducer