window.addEventListener('load', function() {
    let long;
    let lat;
    let temperatureElement = document.querySelector('.temperature');
    let descriptionElement = document.querySelector('.description');
    let locationElement = document.querySelector('.location-timezone');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=53e4ca31b501b47489be06ab1ce2d9f5&units=metric`;
            const options = { method: 'GET', headers: { accept: 'application/json' } };
            

            fetch(api, options)
                .then(response => response.json())
                .then(data => {
                    const currentTemperature = data.main.temp;
                    const description = data.weather[0].main + ' - ' + data.weather[0].description;
                    const location = data.name + ', ' + data.sys.country;

                    temperatureElement.textContent = currentTemperature;
                    descriptionElement.textContent = description;
                    locationElement.textContent = location;
                });
            }); 
    }


});