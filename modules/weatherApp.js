const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0c40ec1a1fmsh23762212364407cp1a1efajsne96e478fa14f',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=gothenburg', options)
    // const temp = response.current
	.then(response => response.json())
	.then(response => current = console.log(response))
    
	.catch(err => console.error(err));




