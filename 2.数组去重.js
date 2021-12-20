//const unique = (array) => array.filter((item, index, array) => array.indexOf(item) === index)

const unique = (array) => [...new Set(array)]

const array = [1, 2, 1, 1, '1']
console.log(array)
console.log(unique(array))