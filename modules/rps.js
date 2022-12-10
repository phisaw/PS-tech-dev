rockbtn = document.getElementById('btnRock')
paperbtn = document.getElementById('btnPaper')
scissorbtn = document.getElementById('btnScissor')
resultText = document.getElementById('rpsResult')
rpsCounter = document.getElementById('rpsCounter')
reset = document.getElementById('btnreset')
const buttons = document.querySelectorAll('.rpsbtn')

buttons.forEach(button => {
    button.onclick = () => resultText.innerText = (`You pressed ${button.innerHTML}`)
})

 

// reset.onclick = () => buttons.innerText = timesClicked[buttons.value]

reset.onclick = () => clearScores()   

function clearScores() {
    buttons.forEach(button => button.innerText = '')
    buttons.forEach(button => timesClicked[button.value] = 0)
}


// rockbtn.onclick = () => console.log(`you clicked on:  ${rockbtn.innerText}`)
// paperbtn.onclick = () => console.log(`you clicked on:  ${paperbtn.innerText}`)
// scissorbtn.onclick = () => console.log(`you clicked on:  ${scissorbtn.innerText}`)
// console.log(paperbtn.innerText);
// console.log(scissorbtn.innerText);


 const timesClicked = {'rock': 0, 'paper': 0, 'scissor': 0}
    buttons.forEach(button => {
        button.onclick = () => {
            timesClicked[button.value] +=1
            button.innerText = timesClicked[button.value]
        }
    });