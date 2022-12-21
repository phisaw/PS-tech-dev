// while loops, when you're not sure how many times you want to loop.
// til condition is not true

let numm = 0

while (numm <5) {
    // console.log(`hi ${numm}`);
    numm++
}

// event listners

const start = document.getElementById('startGame')

start.onclick = () => {
    console.log('hi!' + numm);
    numm++
}


//make the DOM respond to keypresses
document.addEventListener('keydown',function(e){
    if (e.key == 'q') {
        console.log('key pressed is Q');
        document.getElementById('kick').play()
    }else if (e.key =='e') {
        console.log('key pressed is E');
        document.getElementById('punch').play()
    }
})




// audio tags