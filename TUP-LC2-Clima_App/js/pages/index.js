let key = "ee96cdefb8036036787980a93cabf5f5";
let tmp = document.getElementById("tmp")
let st = document.getElementById("st")
let hum = document.getElementById("hum")
let vel = document.getElementById("vel")
let pres = document.getElementById("pres")
let city = document.getElementById("city")
let img = document.getElementById("img")

window.onload = function() {
    prueba();
}
var select = document.getElementById("select")
function prueba() {
    let cities = getCitiesFromLocalStorage();
    console.log(cities);
    if(!cities.length == 0){
        cities.forEach(ciudad =>{
            var opcion = document.createElement('option');
            opcion.text = ciudad;
            opcion.value = ciudad;
            select.appendChild(opcion);
        })
    }
}

async function mostrarClima() {
    let url= `api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=${key}&units=metric&lang=es`
    let response =await fetch(url);
    let datos = response.json;
    JSON.parse(JSON.stringify(datos));

    tmp.innerHTML= datos.main.temp;
    tmp.innerHTML= datos.main.feels_like;
    tmp.innerHTML= datos.main.humidity;
    tmp.innerHTML= datos.wind.speed;
    tmp.innerHTML= datos.main.pressure;
    city.innerHTML = select.value;
    img.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icono clima actual">`;
}
