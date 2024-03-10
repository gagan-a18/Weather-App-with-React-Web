import { changeState } from "../../redux-toolkit/Features/ViewScreen";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";


export default function Buttons() {

    const view_screen_value = useAppSelector(state => state.viewScreenOption.value);
    const dispatch = useAppDispatch();

    const RealTimeClick = () => {
        dispatch(changeState('real_time'));
    }

    const ForecastWeatherClick = () => {
        dispatch(changeState('forecast_weather'));
    }

    return (
        <>
            <button onClick={RealTimeClick} className={`${view_screen_value === 'real_time' ? "bg-slate-700" : "bg-slate-400"} text-white rounded-full p-3 hover:cursor-pointer hover:bg-slate-700 mr-2`} >Real Time Weather</button>
            <button onClick={ForecastWeatherClick} className={` ${view_screen_value === 'forecast_weather' ? "bg-slate-700" : "bg-slate-400"} text-white rounded-full p-3 hover:cursor-pointer hover:bg-slate-700 mr-5`} >Forecast Weather</button>
        </>
    )
}
