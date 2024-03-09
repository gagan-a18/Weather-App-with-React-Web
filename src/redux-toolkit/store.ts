import { configureStore } from '@reduxjs/toolkit'
import { viewslice } from './Features/ViewScreen'

export const store = configureStore({
    reducer: {
        viewScreenOption: viewslice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch