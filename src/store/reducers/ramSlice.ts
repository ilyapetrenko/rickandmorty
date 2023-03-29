import {IChar} from "../../models/models";
import {createSlice, current, PayloadAction} from "@reduxjs/toolkit";


const initialState: IChar[] | null = null

export const ramSlice = createSlice({
    name: 'ram',
    initialState,
    reducers: {
        addChars(state, action: PayloadAction<any>){
            return action.payload
        }
    }
})

export const ramActions = ramSlice.actions
export const ramReducer = ramSlice.reducer