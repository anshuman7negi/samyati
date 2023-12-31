import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://127.0.0.1:3000/api/';

export const getBuddies = createAsyncThunk(
    'buddy/getBuddies',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}buddies`);
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const findBuddies = createAsyncThunk(
    'buddy/findBuddies',
    async (findbuddy, thunkAPI) => {
        try {
            const response = await axios.post(`${BASE_URL}find_buddy`, {findbuddy});
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const deleteBuddies = createAsyncThunk(
    'buddy/findBuddies',
    async (buddy_id, thunkAPI) => {
        try {
            const response = await axios.delete(`${BASE_URL}delete_buddy/${buddy_id}`);
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const initialState = {
    isLoading: false,
    error: undefined,
    message: '',
};

const findBuddy = createSlice({
    name: 'buddy',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getBuddies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBuddies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.message = action.payload;
            })
            .addCase(getBuddies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(findBuddies.fulfilled, (state, action) => {
                state.message = action.payload;
            });
    },
});


export default findBuddy.reducer;