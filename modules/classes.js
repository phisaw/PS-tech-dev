//objects similar to CLasses
// objects have properties and methods.
// methods are like functions. Any function that needs a "dott (.) is a method"

class Car {
    constructor(name, color, topSpeed) {
        //properties
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0;
    }

    zeroToSixty() {
        setTimeout(() => {
            console.log('reaching topspeed')
            this.currentSpeed = 60;
            console.log(`speed: ${this.currentSpeed}mph`)
        })
    }


    //getters & setters
    getCurrentSpeed() {
        return currentSpeed
    }

    drive(speed=10) {
        // console.log(`The ${this.name} just drove 2 miles!`)
        this.currentSpeed += speed
        console.log(`${this.name}: driving speed at: ${this.currentSpeed}mph`)
    }

    break() {
        this.currentSpeed -=10
        console.log(`${this.name} slowly breaking. speed: ${this.currentSpeed}mph`)
    }

    stop() {
        this.currentSpeed = 0
        console.log(`${this.name} stops breaks to a stop, speed: ${this.currentSpeed}mph`)
    }
}


const ferrari = new Car('Ferrari', 'red', 250)

const porche = new Car('Porche', 'yellow', 250)

// console.log(ferrari)
// ferrari.drive()

// ferrari.zeroToSixty()

// ferrari.drive()
// ferrari.drive()
// ferrari.break()

// ferrari.stop()


// porche.drive(20)
// porche.drive()
// porche.drive()
// porche.drive(20)

// const number = [1,2,3,]
//push is a builtin function for class Array.
// number.push(4)
// console.log(number)
//create your own methods in classes that already exists.

Array.prototype.myPush = function(item) {
    // 
   this[this.length] = item
    return this
}

const testfruits = ['🍌','🍓','🍪']

console.log(testfruits.myPush('hello'))


const siffror = [1,2,3,4]
const doubleNumbers = siffror.map(siffror => siffror * 2)

console.log(doubleNumbers)