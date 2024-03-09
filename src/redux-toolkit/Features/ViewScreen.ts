import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    value: 'real_time'
}

export const viewslice = createSlice({
    name: 'view_screen_option',
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const { changeState } = viewslice.actions
