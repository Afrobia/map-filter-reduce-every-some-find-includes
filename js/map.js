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
Filter()

///////////////////////////////////////////////////////////////////////////*/



