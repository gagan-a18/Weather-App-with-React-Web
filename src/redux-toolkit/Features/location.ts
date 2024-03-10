import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    value: ''
}

export const locationslice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const { changeState } = locationslice.actions
