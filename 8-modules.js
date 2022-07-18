//Modules
const names = require('./3-names')
const sayHi = require('./4-utils')
const data = require('./5-alternative-flavor')
require('./7-mind-grenade')

console.log(data.singlePerson.name)


sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)