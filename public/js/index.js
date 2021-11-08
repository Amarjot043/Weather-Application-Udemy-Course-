
const weatherForm = document.querySelector("form");
const search = document.querySelector('input');
const locationAddress = document.getElementById("location");
const forecast = document.getElementById("forecast");
const errorMessage = document.getElementById("errorMessage");


weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    fetch(`/weather?address=${search.value}`).then((response) =>{
    response.json().then ((data) =>{
        if (data.error) {
            errorMessage.innerText = `${data.error}`
            locationAddress.innerText=``;
            forecast.innerText = ``
        } else {
            locationAddress.innerText = `${data.location}`;
            forecast.innerText = `${data.forecastData}`;
            
        }
    })
})
})


