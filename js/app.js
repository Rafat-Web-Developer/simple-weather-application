
const API_KEY = `42cfe03edeb792198487cb1f9c0bed72`;
const searchWeather = () => {
    const searchLocationField = document.getElementById('searchLocation');
    const searchLocation = searchLocationField.value.toLowerCase();
    searchLocationField.value = '';
    getDataFromApi(searchLocation);
};
const getDataFromApi = async (getLocation) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getLocation}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayWeather(data);
};

const displayWeather = weather => {
    console.log(weather);
    const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const weather_mode_icon = document.getElementById('weather_mode_icon');
    weather_mode_icon.setAttribute('src', url);
    setInnerText('city_name', weather.name);
    setInnerText('city_current_temp', weather.main.temp);
    setInnerText('weather_mode', weather.weather[0].main);
    
};

const setInnerText = (getId, value) => {
    const element = document.getElementById(getId);
    element.innerText = value;
};