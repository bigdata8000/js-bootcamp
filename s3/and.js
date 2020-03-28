let temp = 55

// Logical And operator, &&, True if both sides are true.
// Logical Or operator, ||, True if at least one side is true.

if (temp >=60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120 ) {
    console.log ('Do not go outside')
} else {
    console.log('Aya, Do what you want')
}


// ---------------------

let isGuestOneVegan = false
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan dishes')
} else {
    console.log('Offer anything')
}




