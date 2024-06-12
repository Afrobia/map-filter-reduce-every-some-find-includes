/*////////////////////////////////////////////////////////////////////////
Map() 
- quando for necessario traduzir ou mapear
todos os elementos de um array para outro conjunto
de valores, executando uma função
/////////////////////////////////////////////////////////////////////////*/

/* Dobrar número 
======================================================================== */
 const numbers = [1, 2, 3, 4, 5, 6, 7];

const doubleNumbers = numbers.map(num => num * 2)
/*
const doubleNumbers = numbers.map( (elem) => {
    return elem * 2
})  
    ou

 function doubleNumber(num) {
    return num *2
 }

 const doubleNumbers = numbers.map(doubleNumber)
   
 console.log(doubleNumbers) 
   */

/* Convertendo Fahrenheit em Celsius
============================================================================*/
const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

const celsius = fahrenheit.map((elem) => Math.round((elem - 32) * 5/9))

/* 
ou

const celsius = fahrenheit.map( (elem) => {
    return Math.round( (elem - 32) * 5/9) // Math.round retorna o valor arredontado para o inteiro mais próximo 
}) 
   console.log(celsius) 
*/

/*////////////////////////////////////////////////////////////////////////
filter()
Quando necessário remover alguns elementos indesejados 
com base eu algumas condições
///////////////////////////////////////////////////////////////////////////*/

// eliminar valores repetidos
/*============================================================================*/
const yetAnotherArray = [ 2 ,3 ,4 ,2 ,5 ,9 ,6 ,3 ];

const uniqueArray = yetAnotherArray.filter((elem, index, arr) => arr.indexOf( elem) === index) 


//console.log(uniqueArray)

/*////////////////////////////////////////////////////////////////////////
reduce()
para encontrar o valor cumulativo concatenado com base em todo o array,
vai retornar um novo array ou objeto
///////////////////////////////////////////////////////////////////////////*/

const rockets = [
    {country: "Russia" , launches: 32},
    {country: "US" , launches: 23},
    {country: "China" , launches: 16},
    {country: "Europe" , launches: 7},
    {country: "India" , launches: 4},
    {country: "Japan" , launches: 3}
]

const totalLaunches = rockets.reduce(( prevVal, elem) => prevVal + elem.launches, 0) 
// definir como valor inicial 0, parametro extra

//console.log(totalLaunches)

/*////////////////////////////////////////////////////////////////////////
every()
quando for preciso testar se todos os elementos do array passam
por um teste específico, vai retornar um boolean
///////////////////////////////////////////////////////////////////////////*/

// Verificar se todos os arrays são maiores que 10
/*============================================================================*/

const  anotherArr = [ 12, 25, 18, 130, 44]

//console.log(anotherArr.every((elem) => elem > 10))

// Verificar se todos tem mais de 18 anos
/*============================================================================*/

const turma = [
    {id: 12, name: "Frederico", age: 8 },
    {id: 47, name: "Francisca", age: 7 },
    {id: 77, name: "Marcos", age: 48 },
    {id: 85, name: "Reinaldo", age: 52 }
]
//console.log(turma.every( p => p.age >= 18))

/*////////////////////////////////////////////////////////////////////////
some()
quando necessário testar se pelo menos um passa pelo teste
///////////////////////////////////////////////////////////////////////////*/

//Verificar se há algum número primo 
/*============================================================================*/

function isPrime (value) {
    for( let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false
        };
    };
    return value;
}

const oneMoreArray =[6, 8, 11, 14, 42];

//console.log ( oneMoreArray.some(isPrime))

//Verificar por consições se valores/objetos, retorno de uma API
/*============================================================================*/

const team = [
    {id: 12, name: "Topper Harley", pilot: true},
    {id: 44, name: "Ramada Thompson", pilot: true},
    {id: 59, name: "Peter Thompson", pilot: false},
    {id: 122, name: "Kowalski", pilot: false}
];

//console.log( team.some( person => person.pilot))
// Verificar se alguem é pilot

/*////////////////////////////////////////////////////////////////////////
find()
quando necessário procurar ou verificar um valor dentro de um array
ou objeto, que vai retornar o primeiro elemento que satisfizer o teste
///////////////////////////////////////////////////////////////////////////*/

const pizzas = [
    "mussarela",
    "calabresa",
    "portuguesa",
    "marguerita",
]
const foundPizza = pizzas.find( p => p.startsWith("m")) // comece com = startsWith
//console.log(foundPizza)

//Frutas
/*============================================================================*/

const fruits =[
    { name: "jaca", quant: 2},
    { name: "banana", quant: 5},
    { name: "cereja", quant: 8},
    { name: "maça", quant: 4}
]
const foundFruits = fruits.find( fruit => fruit.name === "cereja")
//console.log(foundFruits) //retorna todo o objeto

/*////////////////////////////////////////////////////////////////////////
includes()
quando necessário saber se um objeto ou uma array possue aquele 
determinado elemento, retorno boolean
///////////////////////////////////////////////////////////////////////////*/

//console.log([1, 2, 3, NaN].includes(NaN))

const person = ["Bia", "Gabi", "Tatty"]

//console.log(person.includes("Tatty"))

const people = [
    { id: 11, name: "Adamastor", age: 23, group: "editor" },
    { id: 47, name: "Joana", age: 28, group: "user" },
    { id: 85, name: "Mauricio", age: 34, group: "editor" },
    { id: 97, name: "Lalau", age: 74, group: "admin" }
  ]

  const filteredUsers = people.filter( p => p.name.includes("au")) 
  //console.log(filteredUsers)

/*////////////////////////////////////////////////////////////////////////
API real
////////////////////////////////////////////////////////////////////////*/

async function getPeople() {
    const response = await fetch('https://randomuser.me/api/?results=5')
    
    return response.json()
}

//getPeople().then( data => console.log(data))

// Somente mulheres
/*============================================================================*/

getPeople().then( data => {
   const people = data.results

   //console.log(people.filter( p => p.gender === 'female'))
})

// Trabalhando com dados
/*============================================================================*/
getPeople().then( data => {
    const results = data.results.filter( p => p.dob.age >= 30) //isolar pessoas acimaaa de 30
    const people = []

    for ( let p of results) {
        people.push({
            'Nome' : `${p.name.first} ${p.name.last}`,
            "Sexo" : p.gender,
            'idade' : p.dob.age  
        })
    }
    
    console.table(people)

 })
