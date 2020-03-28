// multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let x = add(10, 1, 5)
console.log(x)


// default arguments
let getScoreText = function (name = 'Player 1', score = 0) {
    // return 'Name: ' + name + ' - Score: ' + score 
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText('Mario')
console.log(scoreText)


// challenge area
// total, tipPercent, 

/* let getTip = function (mealTotal, tipPercent = .2) {
    return mealTotal * tipPercent
}

let f_tip = getTip(100, .25)
console.log(f_tip) */


// template strings ----------------------------

let name = 'Jen'
let age = 21
console.log(`Hey, my name is ${name}! I am ${age} years old.`)


// challenge -----------------------------------

let getTip = function (mealTotal, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = mealTotal * tipPercent
    return `A ${percent}% tip on $${mealTotal} would be $${tip}`
}

let tip = getTip(60)
console.log(tip)

