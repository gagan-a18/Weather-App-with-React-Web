import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    value: {
        'latitude': "",
        'longitude': ""
    }
}

export const latlongslice = createSlice({
    name: 'latitute_longitude',
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<{ latitude: string; longitude: string }>) => {
            const { latitude, longitude } = action.payload;
            state.value.latitude = latitude;
            state.value.longitude = longitude;
        }
    }
})

export const { changeState: changeLatLongState } = latlongslice.actions
