
const API_KEY = `42cfe03edeb792198487cb1f9c0bed72`;

const showElement = (getId) => {
    const element = document.getElementById(getId);
    element.classList.remove('d-none');
};
const hideElement = (getId) => {
    const element = document.getElementById(getId);
    element.classList.add('d-none');
};

const searchWeather = () => {
    const searchLocationField = document.getElementById('searchLocation');
    const searchLocation = searchLocationField.value.toLowerCase();
    searchLocationField.value = '';
    getDataFromApi(searchLocation);
};
const getDataFromApi = async (getLocation) => {
    hideElement('showWeatherDiv');
    showElement('showLoadingDiv');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getLocation}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    hideElement('showLoadingDiv');
    showElement('showWeatherDiv');
    displayWeather(data);
};

const displayWeather = weather => {
    const mode = weather.weather[0].main;
    switch(mode){
        case 'Drizzle':
            document.getElementById('body').style.background = `url('images/rain.jpg')`;
            document.getElementById('body').style.backgroundRepeat = `no-repeat`;
            document.getElementById('body').style.backgroundSize = `cover`;
            break;
        case 'Haze':
            document.getElementById('body').style.background = `url('images/haze.jpg')`;
            document.getElementById('body').style.backgroundRepeat = `no-repeat`;
            document.getElementById('body').style.backgroundSize = `cover`;
            break;
        case 'Rain':
            document.getElementById('body').style.background = `url('images/rain.jpg')`;
            document.getElementById('body').style.backgroundRepeat = `no-repeat`;
            document.getElementById('body').style.backgroundSize = `cover`;
            break;
        case 'Clouds':
            document.getElementById('body').style.background = `url('images/cloud.jpg')`;
            document.getElementById('body').style.backgroundRepeat = `no-repeat`;
            document.getElementById('body').style.backgroundSize = `cover`;
            break;
        default:
            document.getElementById('body').style.background = `url('images/bg-image.jpg')`;
            document.getElementById('body').style.backgroundRepeat = `no-repeat`;
            document.getElementById('body').style.backgroundSize = `cover`;
            break;
            
    }
    console.log(weather);
    const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const weather_mode_icon = document.getElementById('weather_mode_icon');
    weather_mode_icon.setAttribute('src', url);
    setInnerText('city_name', weather.name);
    setInnerText('city_current_temp', weather.main.temp);
    setInnerText('weather_mode', mode);
    
};

const setInnerText = (getId, value) => {
    const element = document.getElementById(getId);
    element.innerText = value;
};