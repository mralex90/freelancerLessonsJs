// Поиск в массиве 

// find u findIndex
/* В случае когда у нас массив, точнее его элементы являются обьектами нужно 
пользоваться этими методами. Эти методы обеспечивают поиск в массиве обьектов 
с определенным условием и возвращает элемент первый попавшийся который удовлетворит 
этому условию.


// Синтаксис
let result = arr.find(function(item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывется
    // если все итерации оказались ложными, возвращается undefined
});
*/

let arr = [
    { name: 'Aleks', age: 31},
    { name: 'Ivan', age: 18},
    { name: 'Olya', age: 'No comment'},
]

let resultOne = arr.find(function (item, index, array) {
    return item.age === 18;
}); // можно записать это же с помощью стрклочной ф-ии

// let resultOne = arr.find(item => item.age === 18);
console.log(resultOne);

// findIndex   - возвращает не элемент, а его индекс/ключ
let resultTwo = arr.findIndex(item => item.age === 18);
console.log(resultTwo);

//////////

// filter
/*
Этот метод очень похож на метод find, но разница в том что он не прекращает 
свою работу в тот момент, когда удовлетворено указанное условие, а продолжает ее, 
и соответственно, возвращает массив из всех элементов которые удовлетворяют 
указанному условию.

Метод ищет все элементы, на которых функция-колбэк вернет true.
let result = arr.filter(function (item, index, array) {
    // если true - элемент добавляется к результату, и перебор продолжается
    // возвращается пустой массив в случае, если ничего не найдено
});
*/

let arr1 = [
    { name: 'Aleks', age: 31},
    { name: 'Ivan', age: 18},
    { name: 'Olya', age: 'No comment'},
]
let result = arr1.filter(function (item, index, array) {
    return item.age >= 18;
});
console.log(result);