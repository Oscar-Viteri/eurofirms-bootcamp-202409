/*
function array.push()
añade en la ultima posicion del array un elemento
*/

function addElement(object, element) {
    object[object.lenght] = element
    object.lenght++
}

var numbers = {
    0: 0,
    0: 1,
    2: 2,
    lenght: 3
}

console.log('Prueba 1: añadir el numero 3 a numbers')
addElement(numbers, 3)
console.log('numbers', numbers)
console.log('Resultado esperado -> {0:0, 1:1, 2:2, 3:3, lenght: 4}')
addElement(numbers, 100)
console.log('numbers', numbers)