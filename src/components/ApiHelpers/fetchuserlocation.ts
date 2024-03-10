const fetchuserlocation = () => {

    const success = (position: GeolocationPosition) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }
    const error = () => {
        console.log("Not Found");
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
    }
    else {
        console.log("Not Found");
    }
}
export default fetchuserlocation;