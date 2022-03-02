
const API_KEY = `42cfe03edeb792198487cb1f9c0bed72`;
const searchWeather = () => {
    const searchLocationField = document.getElementById('searchLocation');
    const searchLocation = searchLocationField.value.toLowerCase();
    getDataFromApi(searchLocation);
};
const getDataFromApi = async (getLocation) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getLocation}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
};