const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0c40ec1a1fmsh23762212364407cp1a1efajsne96e478fa14f',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


const cityName = document.getElementById('city')
const weatherCond = document.getElementById('weatherCondition')
const temp = document.getElementById('temp')
const feelsLike = document.getElementById('feelsLike')
const imgContainer = document.getElementById('weatherImage_container')
const wind = document.getElementById('wind')

const lastUpdate = document.getElementById('lastUpdate')


fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=gothenburg', options)

	.then(response => response.json())
	.then(json => {
		
		console.log(json)
		cityName.innerText = json.location.name
		weatherCond.innerText = json.current.condition.text
		temp.innerText = json.current.temp_c
		feelsLike.innerText = json.current.feelslike_c
		wind.innerText = json.current.wind_kph

		imgContainer.innerHTML = `<img src='${json.current.condition.icon}'/>`
		lastUpdate.innerText = json.current.last_updated
	}
	)
		
	// .catch(err => console.error(err));
	
		


