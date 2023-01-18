const cityToSearch = document.getElementById('cityToSearch')
const search = document.getElementById('search')
const temp = document.getElementById('temp')
const minTemp = document.getElementById('min-temp')
const maxTemp = document.getElementById('max-temp')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')
const city = document.getElementById('city')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd65d479ecfmsh705b79f8ec2d0b1p177d42jsn5bcbf6100730',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const display =(currentCity)=>{
    const BASE_URL = ('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ currentCity)
    fetch(BASE_URL, options)
	.then(response => response.json())
	.then(data =>{
        console.log(data)
        city.innerHTML = currentCity
        temp.innerHTML = `${data.temp}°C`
        minTemp.innerHTML = `${data.min_temp}°C`
        maxTemp.innerHTML = `${data.max_temp}°C`
        humidity.innerHTML = data.humidity
        wind.innerHTML = data.wind_speed
    })
	.catch(err => console.error(err));
}
// const display = async (currentCity) => {
//     const BASE_URL = ('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ currentCity)
//     const response = await (fetch(BASE_URL),options)
//     const data = await data.json
//     // const data = json(response)
//     city.innerHTML = currentCity
//     temp.innerHTML = data.temp
//     minTemp.innerHTML = data.min_temp
//     maxTemp.innerHTML = data.max_temp
//     humidity.innerHTML = data.humidity
//     wind.innerHTML = data.wind_speed
// }

search.onclick = () => display(cityToSearch.value)

display('pune')