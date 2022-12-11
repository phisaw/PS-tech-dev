// let weather = prompt('Hows the weather?')
// if (weather == 'rainy') {
//     console.log("Grab your umbrella")
// }else{
//     console.log('Wear sunglasses')
// }

function saymyname(name) {
    console.log(name)
    
}
// saymyname('helo')

function greetin(name) {
    greet = `Hi ${name}, Nice to meet you!`
    console.log(greet)
}
//greetin('Philip')

function sum(a,b) {
    return a + b
    
}

//console.log(sum(2,4))


function calcFoodTot(food, tip) {
    const tipPercentage = tip /100
    const tipAmount = food *tipPercentage
    const total = sum(food, tipAmount)
    return total
    
}

//console.log(calcFoodTot(150,20))

// const sumArrow = (a,b) => a + b
// //console.log(sumArrow(10,50))


// // groceries = ['banana',"apple","pear","orange" ]

// // groceries.push('toe')
// // //console.log(groceries.slice(1,3))
// // //console.log(groceries.indexOf('apple'))

// // const person = {
// //     name: 'Leonardo',
// //     shirt: 'white'
// // }
// // const person2 = {
// //     name: 'Amber',
// //     shirt: 'Blue'
// // }
// const introducer = (name, shirt) => {
//     const person = {
//         name: name,
//         shirt: shirt,
//         assets: 100000,
//         liability: 50000,
//         networth: function () {
//             return this.assets - this.liability
//         }
//     }
//     const intro = `Hi my name is ${person.name} and the color of my shirt is ${person.shirt}. My networth is $${person.networth()} USD`
//     return intro
// }

// //console.log(introducer('Leonardo','White '))


// fruits = ['banana',"apple","pear","orange" ]


// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(fruits[i])
// // }
// // for (const fruit of fruits) {
// //     console.log('hello ' + fruit)
// // }

// const numbers = [1,2,3,4,5,6,7,8]

// let result = []

// for (const nums of numbers) {
//     console.log(nums*2)
//     result.push(nums * 2)
// }

//console.log(result)

// const double = (numbers) => {
//     let result = []
//     for (const number of numbers) {
//         result.push(number ** 2)
//     }
//     return result
// }
// //console.log(double([1,2,3,4,5,6]))

// const letterCounter = () => {

//     let result = 0;

//     for (index in phrase) {
//         console.log(Number(index)+1)
//         result = Number(index) + 1
//     }
//     return {result}
// }

//const phrase = prompt('Letters in this sentence is')
// letterCounter()



//  const sumArray = (numbers) => {
//     let result = 0;
//     //for loop
//     for (const number of numbers) {
//         result = number + result
//         console.log(`current result is ${result}`)
//     }
//     return { result }
//  }
//  //const nums = [1,2,3,4,5]
//  //console.log(sumArray(nums))




//const sumArray = (numbers)

// let nums = [1,2,3,4]

// const sumArray = (numbers) => {
//     let result = 0;

//     for (const number of numbers) {
//         result = number + result
        
//     }
//     return {result}
// }

// // console.log(sumArray(nums));


// const max = (numbers) => {
//     let result = 0;
//     for (const numbs of numbers) {
//         if (numbs > result) {
            
//             result = numbs
            
//         }
        
//     }

//     return {result};
// }

// let numbs = [1,2,5,8,4]

// // console.log(max(numbs));



const letterfrequency = (phrase) => {


    const frequency = {}
    
    for (const letter of phrase) {
        // console.log(letter);

        if (letter in frequency) {
            frequency[letter] = frequency[letter] +1
            
        }else{
            frequency[letter] = 1
        }
    }

    return frequency
}

// console.log(letterfrequency('testingkolfikodakobakikododo'));


// const wordFreq = (phrase) => {

//     words = phrase.split(' ')
//     // console.log(words);

//     return letterfrequency(words)

// }

// const userInput = prompt('Write your sentence: ')
// console.log(wordFreq(userInput));

// higher order functions!


// map returns array.

// let result = [1,2,3,4].map(number => number *2)
// console.log(result);

const doubleMap = (number) => {
    return number.map(number => number*2)
}
// console.log(doubleMap([1,3,5,8]));

let num = [1,2,3,54,6,7,2,1,1,1,3,3,3,3,3,2,2,2,2]
// console.log(num.filter(num => num >3));

const actors = [
    {name: 'Johnny', netWorth: 2000000},
    {name: 'Amber', netWorth: 5},
    {name: 'Leonardo', netWorth: 10000000},
]

// let richactors = ((actors.filter(actor => actor.netWorth >10)));

// let names = richactors.map(actors => actors.name).join(', ')
// // console.log(names);

// let money = actors.map(actors => actors.netWorth)
// console.log(money)

let combinedMoney = actors.reduce((currmoney, accum) => currmoney + accum.netWorth,0)

// console.log(`combined money is ${combinedMoney}`);

// const ptag = document.getElementById('actor')

// ptag.innerHTML = `${names}`


// REDUCE
//combine all of the networths. using sum. use reduce


// const sumArrayWithReduce = (numbers) => {
//     numbers
// }
//reduce loops and gives you back the accumilator


//declare the array with number
//create a constant holding the result of sum of the array after looping it.
//log the result in the console.
// const nums = [1,2,3]
// const result = nums.reduce(sum)

// console.log(result);




//multiply function
// function multi(a,b) {
//     return a * b
// }


// use the multiply function with reduce to multiply all the numbers of the array and recevie result

// const nums2 = [1,2,3,4,5]
// const res2 = nums2.reduce(multi)
// console.log(res2);


//dom manipulation
rpsResult = document.getElementById('rpsResult')

const randomFruit = (fruits) => {
    const randomNumber = 
    Math.floor(Math.random() * fruits.length)
    return fruits[randomNumber]
}

let fruits = ['🍌','🍎','🍊','🍐']
// console.log(randomFruit(fruits));


rpsResult.innerHTML = (randomFruit(fruits))


//weather checking...

//if else if else
//rain +1 , sun - , overcast 0

const weatherScorer = (weather, weather2) => {
    let score = 0
    if (weather == 'rainy' && weather2 == 'overcast') {
        score = 2
    } else if (weather == 'rainy') {
        score = 1
    } else if (weather == 'sunny') {
        score = -1
    } else {
        score = 0
        console.log('Enter valid weather');
    }
    return score
}  
// console.log(weatherScorer('overcast')); 