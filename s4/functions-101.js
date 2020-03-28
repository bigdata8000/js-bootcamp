// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)


//----------------------------

let fah2cel = function (temp) {
    let result = (temp - 32) * 5/9
    return result
}

let temp1 = fah2cel(32)
let temp2 = fah2cel(68)
console.log(temp1)
console.log(temp2)

// 32f = 0
// 68 = 20