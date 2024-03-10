import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    value: {
        'cloudCover': 0,
        'dewPoint': 0,
        'humidity': 0,
        'pressureSurfaceLevel': 0,
        'visibility': 0,
        'windSpeed': 0,
    }
}

export const weatherslice = createSlice({
    name: 'weather_details',
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<{ cloudCover: number, dewPoint: number, humidity: number, pressureSurfaceLevel: number, visibility: number, windSpeed: number }>) => {
            const { cloudCover, dewPoint, humidity, pressureSurfaceLevel, visibility, windSpeed } = action.payload;
            state.value.cloudCover = cloudCover;
            state.value.dewPoint = dewPoint;
            state.value.humidity = humidity;
            state.value.pressureSurfaceLevel = pressureSurfaceLevel;
            state.value.visibility = visibility;
            state.value.windSpeed = windSpeed;
        }
    }
})

export const { changeState: updateweatherdetails } = weatherslice.actions
