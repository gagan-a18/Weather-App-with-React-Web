
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker, Range } from 'react-date-range';
import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux-toolkit/hooks';
import { useForm } from "react-hook-form"
import realtimeweather from '../ApiHelpers/realtimeweather';
import forecastweather from '../ApiHelpers/forecastweather';
import { changeState } from '../../redux-toolkit/Features/location';
import { changeLatLongState } from '../../redux-toolkit/Features/latitudelongitude';
import { updateweatherdetails } from '../../redux-toolkit/Features/weatherdetails';

export default function SearchBar() {

    const { register, handleSubmit, reset } = useForm()

    const dispatch = useAppDispatch();




    const view_screen_value = useAppSelector(state => state.viewScreenOption.value);

    const [state, setState] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const onSubmit = async (data: any) => {

        if (view_screen_value === 'real_time') {
            await realtimeweather(data.user_location_input).then((response) => {
                console.log(response?.data)
                dispatch(changeState(response?.data.location.name))
                const latitude = response?.data.location.lat
                const longitude = response?.data.location.lon
                const cloudCover = response?.data.data.values.cloudCover;
                const dewPoint = response?.data.data.values.dewPoint;
                const humidity = response?.data.data.values.humidity;
                const pressureSurfaceLevel = response?.data.data.values.pressureSurfaceLevel;
                const visibility = response?.data.data.values.visibility;
                const windSpeed = response?.data.data.values.windSpeed;

                dispatch(changeLatLongState({ latitude, longitude }));
                dispatch(updateweatherdetails({ cloudCover, dewPoint, humidity, pressureSurfaceLevel, visibility, windSpeed }));
            })

        }
        else {
            await forecastweather(data.user_location_input).then((response) => {
                console.log(response?.data)
                dispatch(changeState(response?.data.location.name))
                const latitude = response?.data.location.lat
                const longitude = response?.data.location.lon
                dispatch(changeLatLongState({ latitude, longitude }));
            })
        }
        reset();
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)} >
            <div className='flex xl:flex-row flex-col xl:justify-normal justify-center' >
                <div className='flex flex-row'>
                    <input {...register("user_location_input")} type="text" placeholder="enter city, state or country" className="h-10 sm:w-[400px] w-[350px] rounded-full px-3" />
                    <button className='w-2 h-3' ><span className="material-symbols-outlined relative top-2 right-8">search</span></button>
                </div>
                {view_screen_value === 'forecast_weather' && (
                    <div>
                        <DateRangePicker
                            className="w-6/12 xl:mt-0 mt-2"
                            editableDateInputs={true}
                            onChange={item => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                        />
                    </div>
                )}
            </div>
        </form>


    )
}
