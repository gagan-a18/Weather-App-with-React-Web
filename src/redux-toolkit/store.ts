import { configureStore } from '@reduxjs/toolkit'
import { viewslice } from './Features/ViewScreen'
import { locationslice } from './Features/location'
import { latlongslice } from './Features/latitudelongitude'
import { weatherslice } from './Features/weatherdetails'

export const store = configureStore({
    reducer: {
        viewScreenOption: viewslice.reducer,
        setLocation: locationslice.reducer,
        setlatlong: latlongslice.reducer,
        updateweather: weatherslice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch