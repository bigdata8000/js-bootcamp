// Global (name)
    // Local (name)
        // Local
    // Local

let name = 'Henry'

if (true) {
    let name = 'Mike'

    if (true) {
        name = 'Jen'
        console.log(name)   // will get Jen, in the same code block
    }
}

if (true) {
    console.log(name)   // will get Henry        
}

