document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let citydata = document.getElementById('city').value;
    let apiKey = "e53c693e779ccb39e9947b141b8b9157";

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${citydata}&appid=${apiKey}&units=metric`)
        .then((res) => {
            console.log(res.data);

            //document.getElementById('result').innerHTML = `
            //<h2>City: ${res.data.name}</h2>
            //<h3>Temperature: ${res.data.main.temp} °C</h3>
            //<h4>Description: ${res.data.weather[0].description}</h4>`;
            document.querySelector('div').innerHTML = `<h2>City: ${res.data.name}</h2>
            <h3>Temperature: ${Math.ceil(res.data.main.temp)} °C</h3>
            <h3>Description: ${res.data.weather[0].description}</h3>`
            document.querySelector('div').style.color='Orange';
            document.querySelector('div').style.backgroundColor='white';
        })
        .catch((err) => {
            console.log(err);
        });
});






