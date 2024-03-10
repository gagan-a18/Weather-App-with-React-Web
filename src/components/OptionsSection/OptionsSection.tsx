import { useAppSelector } from "../../redux-toolkit/hooks";
import SearchBar from "../SearchBar/SearchBar";


export default function OptionsSection() {

    const view_screen_value = useAppSelector(state => state.viewScreenOption.value);

    return (
        <div className="flex mb-2">
            {view_screen_value === 'real_time' && (
                <div className="rounded-3xl shadow-2xl w-9/12 min-h-14 bg-transparent mx-auto p-2 flex flex-row justify-center items-center">
                    <SearchBar />
                </div>
            )}
            {view_screen_value === 'forecast_weather' && (
                <div className="rounded-3xl shadow-2xl w-9/12 min-h-14 bg-transparent mx-auto p-2 flex flex-row justify-center items-center">
                    <SearchBar />
                </div>
            )}
        </div>
    )
}
