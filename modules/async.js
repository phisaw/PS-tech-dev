const soupText = document.getElementById('soupText')
const soupBtn = document.getElementById('soupBtn')





const free = () => soupText.innerText = ('Free')
const soup = () => soupText.innerText = ('Soup')
const emoji = () => soupText.innerText = ('🍜')
const ex = () => soupText.innerText = ('!')
const ex2 = () => soupText.innerText = ('!!')
const ex3 = () => soupText.innerText = ('!!!')
// setTimeout(free ,2000)
// setTimeout(soup ,4000)


// soupBtn.onclick = ()  => {

//     let souploop = soupArr[soup]
//     for (const soup of soupArr) (

//         //console.log(soup)
//        setInterval(console.log(soup),2000)
//     )
    
// } 

let soupArr = ['Free','Soup','🍜','!','!!','!!!']
soupBtn.onclick = () => {
    // Define a variable to track the current index in the array
    let index = 0;
  
    // Set the time interval (in milliseconds)
    let interval = 500;
  
    // Use setInterval to call a function at the specified time interval
    setInterval(() => {
      // Log the current item in the array to the console
      //console.log(soupArr[index]);
      soupText.innerText = (`${soupArr[index]}`)
      // Increment the index to move to the next item in the array
      index++;
  
      // If the index is greater than or equal to the length of the array, clear the interval
      if (index >= 6) {
        clearInterval(interval);
        soupText.innerText = (`!!!!`)
      }
    }, interval);
  };

const promise1 = new Promise((resolve, reject) => {
    resolve('hi')
    reject('nohi')
});

const getDog =  async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const respone = await fetch(url)
    const data = await respone.json()
    // console.log(data);
}
getDog()