console.log('TEST Array.prototype.join)

console.log('CASE unir elementos de un array')

var shoppingList = [
    { item: 'Apples', quantity: 5 },
    { item: 'Bananas', quantity: 3 },
    { item: 'Carrots', quantity: 4 },
    { item: 'Bread', quantity: 2 },
    { item: 'Eggs', quantity: 12 }
]

var completeList = [
    { item: 'Orange', quantity: 10 },
    { item: 'Mango', quantity: 6 },
    { item: 'Peach', quantity: 2 }
]
var completeList = shoppingList.join(completeList)
