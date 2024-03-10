import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import realtimeweather from "../ApiHelpers/realtimeweather";
import forecastweather from "../ApiHelpers/forecastweather";
import { changeState } from "../../redux-toolkit/Features/location";
import WeatherData from "../ApiHelpers/dynamicinformation";
export default function Hero() {

    const weather_data = WeatherData();
    console.log(weather_data)
    const dispatch = useAppDispatch();
    const view_screen_value = useAppSelector(state => state.viewScreenOption.value);


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
                    {weather_data.Location ?
                        <div className="w-full flex justify-center flex-col p-6 rounded-full bg-white shadow-2xl mt-3" >

                            {Object.entries(weather_data).map((value, index) => (
                                <p key={index} className="text-3xl text-center ">{value[0]} : {value[1]} </p>
                            ))}

                        </div> :
                        <></>
                    }
                </div>
            </div>
        </div>

    )
}
