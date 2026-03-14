import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchOrderThunk = createAsyncThunk("fetchOrderThunk",
    async () => {
        const token = localStorage.getItem("token")
        const res = await fetch("http://localhost:3000/api/customer/orders", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await res.json();
        if (res.status === 200) {
            console.log(data)
            return data.orders
        } else {
            return data.errorMessage
        }
    }
)

const initialState = {
    orders: [],
    isLoading: false,
    isError: null
};

const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        deleteOrder: (state, action) => {
            state.orders = state.orders.filter(
                (order) => order._id !== action.payload
            );
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrderThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(fetchOrderThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.orders = action.payload;
            })
            .addCase(fetchOrderThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            });

    }

});
export const { addOrder, deleteOrder } = orderSlice.actions

export default orderSlice.reducer