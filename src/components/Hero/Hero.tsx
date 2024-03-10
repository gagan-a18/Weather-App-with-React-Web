import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import realtimeweather from "../ApiHelpers/realtimeweather";
import forecastweather from "../ApiHelpers/forecastweather";
import { changeState } from "../../redux-toolkit/Features/location";


export default function Hero() {

    const dispatch = useAppDispatch();
    const view_screen_value = useAppSelector(state => state.viewScreenOption.value);
    const Location = useAppSelector(state => state.setLocation.value)
    const Latitude = useAppSelector(state => state.setlatlong.value.latitude);
    const Longitude = useAppSelector(state => state.setlatlong.value.longitude);
    const cloudCover = useAppSelector(state => state.updateweather.value.cloudCover);
    const dewPoint = useAppSelector(state => state.updateweather.value.dewPoint);
    const humidity = useAppSelector(state => state.updateweather.value.humidity);
    const pressureSurfaceLevel = useAppSelector(state => state.updateweather.value.pressureSurfaceLevel);
    const visibility = useAppSelector(state => state.updateweather.value.visibility);
    const windSpeed = useAppSelector(state => state.updateweather.value.windSpeed);

    // useEffect(() => {

    //     if (view_screen_value === 'real_time') {
    //         realtimeweather('india').then((response) => {
    //             console.log(response?.data.location.name)
    //             console.log(response.data)
    //             dispatch(changeState('india'))
    //         })
    //     }
    //     else {
    //         forecastweather('india').then((response) => {
    //             console.log(response?.data)
    //             dispatch(changeState('india'))
    //         })
    //     }

    // }, [])

    return (
        <div className="flex">
            <div className="rounded-3xl w-10/12 mx-auto">
                <div className="flex flex-col items-center justify-center">

                    {Location ?
                        <div className="w-fit p-4 rounded-full bg-white shadow-2xl mt-3" >
                            <p className="text-3xl">{Location}</p>
                        </div> :
                        <></>
                    }
                    {Location ?
                        <div className="w-fit p-4 rounded-full bg-white shadow-2xl mt-3" >
                            <p className="text-3xl">Latitude : {Latitude} | Longitude : {Longitude}</p>
                        </div> :
                        <></>
                    }
                    {Location ?
                        <div className="w-full flex justify-center flex-col p-6 rounded-full bg-white shadow-2xl mt-3" >
                            <p className="text-3xl text-center">cloudCover : {cloudCover}</p>
                            <p className="text-3xl text-center">dewPoint : {dewPoint}</p>
                            <p className="text-3xl text-center">dewPoint : {dewPoint}</p>
                            <p className="text-3xl text-center">humidity: {humidity}</p>
                            <p className="text-3xl text-center">pressureSurfaceLevel: {pressureSurfaceLevel}</p>
                            <p className="text-3xl text-center">visibility : {visibility}</p>
                            <p className="text-3xl text-center">windSpeed : {windSpeed}</p>

                        </div> :
                        <></>
                    }
                </div>
            </div>
        </div>

    )
}
