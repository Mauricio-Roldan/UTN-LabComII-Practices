function addNewCityToLocalStorage() {
    var newCity = document.getElementById("new-city").value;
    let cities = getCitiesFromLocalStorage();
    cities.push(newCity);
    localStorage.setItem("CITIES", JSON.stringify(cities));
}

