import { createSlice } from "@reduxjs/toolkit";
import { Typefrom, TypeInitialState } from "./types";

const initialState: TypeInitialState = {
    from : {} as Typefrom,
    to: {} as Typefrom,
    travelTime: 0,
    selectedOption: '',
}

export const taxiSlice = createSlice({
    name: 'taxi',
    initialState,
    reducers: {
        setFrom: (state,action) => {
            state.from = action.payload
        },
        setTo: (state,action) => {
            state.to = action.payload
        },
        setTravelTime: (state,action) => {
            state.travelTime = action.payload
        },
        setSelectedOption: (state,action) => {
            state.selectedOption = action.payload
        },
    }
});