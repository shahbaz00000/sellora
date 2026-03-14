import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSellerProduct = createAsyncThunk("fetchSellerProduct",
    async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch("http://localhost:3000/api/seller/products", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await res.json();
            if(res.status === 200){
                console.log(data);
                return data;
            }else{
                throw new Error(data.errorMessage)
            }
        } catch (error) {
            return error.message;
        }
    }
)

const initialState = {
    products: [],
    isLoading: false,
    isError: null
};

const sellerSlice = createSlice({
    name: "seller",
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products = state.products.push(action.payload.product);
        },
        setProduct: (state, action) => {
            state.products = action.payload.products
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product._id !== action.payload._id);
        },
        updateProduct: (state, action) => {
            state.products = state.products.map((product) => product._id === action.payload._id ? action.payload.product : product);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchSellerProduct.pending,(state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchSellerProduct.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.products = action.payload.products
        });
        builder.addCase(fetchSellerProduct.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = action.payload
        })
    }

});
export const {addProduct,setProduct,deleteProduct,updateProduct} = sellerSlice.actions
export default sellerSlice.reducer;