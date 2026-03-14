import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

// Create Product thunk function
export const createCartProduct = createAsyncThunk("createCartProduct",
    async (productId)=>{
        const token = localStorage.getItem("token");
        try{
            const res = await fetch(`http://localhost:3000/api/customer/${productId}/cart`,{
                method:"POST",
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await res.json();
            if(res.status === 201){
                console.log(data)
                return data
            }else{
                throw new Error(data.errorMessage);
            }
        }catch(error){
            comsole.log(error.message)
            return error.message
        }
    }
);
// Get cart product thunk function
export const fetchCartProduct = createAsyncThunk("fetchcartProduct",
    async ()=>{
        const token = localStorage.getItem("token");
        try{
           const res = await fetch("http://localhost:3000/api/customer/carts",{
            method:"GET",
            headers:{
                Authorization: `Bearer ${token}`
            }
           });
           const data = await res.json();
           if(res.status === 200){
            console.log(data)
            return data
           }else{
            throw new Error(data.error );
           }
        }catch(error){
            console.log(error.message)
            return error.message
        }
    }
)
// Delete From Cart Thunk Function
export const deleteFromCart = createAsyncThunk("deleteFromCart",
    async (cartId)=>{
        const token = localStorage.getItem("token");
        try{
           const res = await fetch(`http://localhost:3000/api/customer/cart/${cartId}/delete`,{
            method:"DELETE",
            headers:{
                Authorization: `Bearer ${token}`
            }
           });
           const data = await res.json();
           if(res.status === 200){
            console.log(data)
            return data
           }else{
            throw new Error(data.error );
           }
        }catch(error){
            console.log(error.message)
            return error.message
        }
    }
)

const initialState = {
    carts:[],
    isLoading:false,
    isError:null,
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.carts = state.carts.push(action.payload.cart)
        },
        setToCart:(state,action)=>{
            state.carts = action.payload.carts
        },
        deleteToCart:(state,action)=>{
            state.carts = state.carts.filter((cart)=>cart._id !== action.payload._id);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCartProduct.pending,(state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchCartProduct.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.carts = action.payload.carts
        });
        builder.addCase(fetchCartProduct.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = action.payload
        })
        builder.addCase(deleteFromCart.fulfilled,(state,action)=>{
            state.carts = state.carts.filter((cart)=>cart._id !== action.payload._id)
        })
    }
    
});

export const {addToCart,deleteToCart,setToCart} = cartSlice.actions;
export default cartSlice.reducer