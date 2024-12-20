import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {taxiSlice} from './slice'


const rooteReducer = combineReducers({
    taxi: taxiSlice.reducer
})

export const store =  configureStore({
    reducer: rooteReducer
})

export type TypeRootState = ReturnType<typeof rooteReducer>