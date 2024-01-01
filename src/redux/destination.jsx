import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://127.0.0.1:3000/api/';

export const getDestination = createAsyncThunk(
    'buddy/getDestination',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}destinations`);
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const createDestination = createAsyncThunk(
    'buddy/findBuddies',
    async (destination, thunkAPI) => {
        try {
            console.log(destination);
            const response = await axios.post(`${BASE_URL}create_destination`, {destination});
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const deleteDestination = createAsyncThunk(
    'buddy/deleteDestination',
    async (destination_id, thunkAPI) => {
        try {
            const response = await axios.delete(`${BASE_URL}delete_destination/${destination_id}`);
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
    destinations: [],
};

const findBuddy = createSlice({
    name: 'buddy',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getDestination.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getDestination.fulfilled, (state, action) => {
                state.isLoading = false;
                state.destinations = action.payload;
            })
            .addCase(getDestination.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(createDestination.fulfilled, (state, action) => {
                state.destinations = action.payload;
            });
    },
});


export default findBuddy.reducer;