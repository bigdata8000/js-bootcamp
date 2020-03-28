let isAccountLocked = false
let userRole = 'user'

// if (isAccountLocked) {
//     console.log('Account is locked')
// } else {
//     console.log('Welcome!')
// }


if (isAccountLocked) {
    console.log('Is accout locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

//-----------------------------------------


let temp = 400

if (temp <= 31) {
    console.log('Its freezing')
} else if (temp >= 100) {
    console.log('Its too hot')
} else {
    console.log('Go for it')
}