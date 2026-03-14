import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchCustomerProduct = createAsyncThunk("fetchcustomerProduct",
    async ()=>{
        try{
            const token = localStorage.getItem("token");
            const res = await fetch("http://localhost:3000/api/customer/products",{
                method:"GET",
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await res.json();
            if(res.status === 200){
                console.log(data);
                return data
            }else{
                throw new Error(data.errorMessage);
            }
        }catch(error){
            return error.message
        }
    }
)

const initialState = {
    products:[],
    isLoading:false,
    isError:null,
}

const customerSeller = createSlice({
    name:"customer",
    initialState:initialState,
    reducers:{
        setProduct:(state,action)=>{
            state.products = action.payload.products;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCustomerProduct.pending,(state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchCustomerProduct.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.products = action.payload.products;
        });
        builder.addCase(fetchCustomerProduct.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = action.payload
        });
    }
});
export const {setProduct} = customerSeller.actions;
export default customerSeller.reducer;