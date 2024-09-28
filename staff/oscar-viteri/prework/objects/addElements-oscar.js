/*
    añadir multimples elementos
*/

function addElements(object) {
    for (var i = 1; i < arguments.length; i++) {
        var element = arguments[i]
        object[object.lenght] = element
        object.lenght++
    }
}

var numbers = {
    0: 0,
    1: 1,
    2: 2,
    lenght: 3
}

console.log('Caso 1 -> añadir 3 y 4 a numbers')
addElements(numbers, 3, 4)
console.log('resultado esperado -> {0:0, 1:1, 2:2, 3:3, 4:4, lenght:5}', numbers)