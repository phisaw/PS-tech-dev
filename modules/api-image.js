console.log('test');


fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => console.log(json))

// let dogImage = 