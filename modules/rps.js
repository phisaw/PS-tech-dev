rockbtn = document.getElementById('btnRock')
paperbtn = document.getElementById('btnPaper')
scissorbtn = document.getElementById('btnScissor')
resultText = document.getElementById('rpsResult')
rpsCounter = document.getElementById('rpsCounter')
reset = document.getElementById('btnreset')
const buttons = document.querySelectorAll('.rpsbtn')

// buttons.forEach(button => {
//     button.onclick = () => resultText.innerText = (`You pressed ${button.innerHTML}`)
// })

// reset.onclick = () => clearScores()   

// function clearScores() {
//     buttons.forEach(button => button.innerText = '')
//     buttons.forEach(button => timesClicked[button.value] = 0)
// }

const totalScore =  {computerScore: 0, playerScore: 0}

    /*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  
    let result = ['Rock','Paper','Scissor']
    
    let random = Math.floor(Math.random() * result.length)
    // console.log(`Computer got: ${result[random]}!`);
    return result[random]
}


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
  let score = 0

  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0
  }else if (playerChoice == 'Rock' && computerChoice == 'Scissor') {
    score = 1
  } else if (playerChoice == 'Scissor' && computerChoice == 'Paper') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  }else {   // Otherwise human loses (aka set score to -1)
    score = -1
  }
  // return score

//   console.log(score);
  return score
  
} 

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    
    rpsCounter.innerText = (totalScore['playerScore'])
    if (score == -1) {
        rpsResult.innerText =`You lose!`
    } else if (score == 0) {
        rpsResult.innerText ='Draw!'
    } else {
        rpsResult.innerText ='You win!'
    }
    
    rpsResult2.innerText =`🧑 ${playerChoice} vs 🤖 ${computerChoice}`
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    let computerChoice = getComputerChoice()
    const score = getResult(playerChoice,computerChoice)
    // console.log(playerChoice);
    // console.log(computerChoice);
    // console.log(score);
    totalScore['playerScore'] += score
    showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  rockbtn = document.getElementById('btnRock')
  paperbtn = document.getElementById('btnPaper')
  scissorbtn = document.getElementById('btnScissor')
  resultText = document.getElementById('rpsResult')
  resultText2 = document.getElementById('rpsResult2')
  rpsCounter = document.getElementById('rpsCounter')
  reset = document.getElementById('btnreset')
  
  const buttons = document.querySelectorAll('.rpsbtn')

    buttons.forEach(button => button.onclick = () => onClickRPS(button.value))

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 
    reset.onclick = () => endGame();
  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
//   console.log('endGame function initiated, clearing all data!');
  rpsCounter.innerText = ('')
  rpsResult.innerHTML = (randomFruit(fruits))
  rpsResult2.innerHTML = ('Make your choice!')
  totalScore['playerScore'] = 0
}

playGame()