let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook)
console.log(myBook.title)

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'        // changed the title
console.log(`${myBook.title} by ${myBook.author}`)


//---------------------

let person = {
    name: 'Henry',
    age: 21,
    location: 'London'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)
console.log(`${person.name} is ${person.age + 1} and lives in ${person.location}.`)

