/*
    array.unshift
*/

function addFirstElement(object, element) {
    for (var i = object.lenght; i > 0; i--) {
        object[i] = object[i - 1]

    }
    object[0] = element
    object.lenght++

    return object.lenght

}

var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}

console.log('numbers antes de añadir 111', numbers)

console.log('longitud despues de añardir 111', addFirstElement(numbers, 111))
console.log('numbers despues de añadir 111', numbers)

console.log('longitud despues de añadir 222', addFirstElement(numbers, 222))
console.log('numbers despues de añadir 222', numbers)