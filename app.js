const api = {
    key: 'd517b54799c82d5939e65acb4bdc781f',
    base: "https://api.openweathermap.org/data/2.5/"
}


const search = document.querySelector('input');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const main = document.getElementById('main');
const icons = document.getElementById('icons');




search.addEventListener('keypress', setQuary);



function setQuary(evt) {
    if (evt.keyCode == 13) {
        getResults(search.value);
        console.log(search.value);
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(weather => displayResults(weather));
}

function displayResults(x) {

    let location = document.getElementById('location');

    location.innerText = `${x.name}, ${x.sys.country}`;

    temperature.innerText = Math.floor(x.main.temp) + '°C';

    description.innerText = x.weather[0].description;

    main.innerText = x.weather[0].main;

    icons.innerHTML = `<img class='animated fadeInDown infnite' src="icons/${x.weather[0].icon}.png">`;


}