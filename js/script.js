//  Сортировка массивов

// Метод sort(fn)
//сортирует масств на месте, меняя в нем порядок элементов.

// Сортировка слов 
let arrOne = [ 'Ivan', 'Olya', 'Aleks',];
console.log(arrOne.sort());

// Сортировка чисел
let arrTwo = [8, 22, 1,];
console.log(arrTwo.sort());

// По умолчанию элементы сортируются как строки. Для строк применяется 
// лексикографический порядок, и действительно выходит, что "8" > "22".
console.log("8" > "22");

// Фунуция сортировки
function compareNumeric(a, b) {
    console.log('Сравниваем ${a} и ${b}');
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;

    // return a - b
}
// console.log(arrTwo.sort((a, b) => a -b));

console.log(arrTwo.sort(compareNumeric));


////// 23:06