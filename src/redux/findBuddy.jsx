import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://127.0.0.1:3000/api/';

export const getBuddies = createAsyncThunk(
    'buddy/getBuddies',
    async (_, thunkAPI) => {
        try{
            const response = await axios.get(`${BASE_URL}buddies`);
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const initialState = {
    isLoading: false,
    error: undefined,
    message: '',
}
const findBuddy = createSlice({
    name: 'buddy',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getBuddies.fulfilled, (state, action) => console.log(action.payload) ({
            ...state,
            message: action.payload,
        }))
    }
})

export default findBuddy.reducer;