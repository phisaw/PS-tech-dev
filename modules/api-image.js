
const dogImage = document.getElementById('img_container')
const newDog = document.getElementById('dogBtn')


const getNewdog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        dogImage.innerHTML = `<img src='${json.message}'/>`
    })
}



newDog.onclick = () => getNewdog()

// let dogImage = 

