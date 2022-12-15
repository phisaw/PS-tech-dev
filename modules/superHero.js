const superImage = document.getElementById('superimg_container')
const newSuper = document.getElementById('superBtn')
const superName = document.getElementById('superName')
const superGender = document.getElementById('gender')
const superHeight = document.getElementById('height')
const superWeight = document.getElementById('weight')
const superPublisher = document.getElementById('publisher')

const baseUrl = 'https://www.superheroapi.com/api.php/10157902605999649'

const getRandom = () => {
    const random = Math.floor(Math.random() * 731) +1;
    return random;
}

const getNewsuper = () => {
    const random = getRandom();
    
    fetch(`https://www.superheroapi.com/api.php/10157902605999649/${random}`)
    .then(response => response.json())
    .then(json => { 
    // console.log(json);
    superImage.innerHTML = `<img src='${json.image.url}'/>`
    superName.innerHTML = `<h4>${json.name}</h4>`
    superGender.innerHTML = `Gender:  ${json.appearance.gender}`
    superHeight.innerHTML = `Height:  ${json.appearance.height[1]}`
    superWeight.innerHTML = `Weight:  ${json.appearance.weight[1]}`
    superPublisher.innerHTML = `Publisher:  ${json.biography.publisher}`
    });

};


const submitBtn = document.getElementById('submitBtn')

const searchSuper = document.getElementById('searchSuper')

const getSearchedSuper = (name) => {
    console.log(searchSuper.value);
    fetch(`${baseUrl}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        console.log(hero)
        
    superImage.innerHTML = `<img src='${hero.image.url}'/>`
    superName.innerHTML = `<h4>${hero.name}</h4>`
    superGender.innerHTML = `Gender:  ${hero.appearance.gender}`
    superHeight.innerHTML = `Height:  ${hero.appearance.height[1]}`
    superWeight.innerHTML = `Weight:  ${hero.appearance.weight[1]}`
    superPublisher.innerHTML = `Publisher:  ${hero.biography.publisher}`
    })
}


//search by pressing enter in the input field instead of the searchbutton.
searchSuper.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      // Submit the form
      getSearchedSuper(searchSuper.value)
    }
  });


submitBtn.onclick = () => getSearchedSuper(searchSuper.value)

newSuper.onclick = () => getNewsuper()

const asyncgetNewsuper = async () => {
    try {
        const getsuper = await getNewsuper();
        //console.log(getsuper);
    } catch (error) {
        console.log('no hero');
        
    }
    
}
asyncgetNewsuper()



//weather app!