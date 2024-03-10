import axios from "axios"

const realtimeweather = async (input_location: string) => {
    try {
        const response = await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${input_location}&apikey=${import.meta.env.VITE_APP_API_KEY}`, {
            headers: {
                Accept: "application/json"
            }
        })
        return response;
    }

    catch (error) {
        console.log(error);
    }
}

export default realtimeweather;