var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (searchElement) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (element === searchElement)
            return true
    }

    return false

}

console.log('TEST Arroz.prototype.includes')

console.log('CASE check cars includes ferrari')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.length = 4
var contains = cars.includes('ferrari')
console.log('includes ferrari->', contains)
//false

console.log('CASE check cars includes fiesta')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.length = 4
var contains = cars.includes('fiesta')
console.log('includes fiesta->', contains)
//true

console.log('CASE check cars includes fiesta(2)')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars[5] = 'm5'
cars.length = 4
var contains = cars.includes('fiesta')
console.log('includes fiesta(2)->', contains)
//true