let countrySelect = document.getElementById("country");
let citySelect = document.getElementById("cities");
let displayText = document.querySelector("p");

let citiesByCountry = {
    "ger": ["Berlin", "Munich", "Hamburg"],
    "usa": ["New York", "Los Angeles", "Chicago"],
    "ukr": ["Kyiv", "Lviv", "Kharkiv"]
};

function populateCities() {
    let selectedCountry = countrySelect.value;
    let cities = citiesByCountry[selectedCountry];

    citySelect.innerHTML = "";

    for (let i = 0; i < cities.length; i++) {
        let option = document.createElement("option");
        option.text = cities[i];
        option.value = cities[i];
        citySelect.appendChild(option);
    }

    displayText.innerHTML = countrySelect.options[countrySelect.selectedIndex].text + ", " + citySelect.options[citySelect.selectedIndex].text;
}

function getNewCity()
{
    displayText.innerHTML = countrySelect.options[countrySelect.selectedIndex].text + ", " + citySelect.options[citySelect.selectedIndex].text;
}

countrySelect.addEventListener("change", populateCities);
citySelect.addEventListener("change", getNewCity);

populateCities();