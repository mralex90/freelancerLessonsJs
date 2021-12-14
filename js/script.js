// Поиск в массиве 

// Методы indexOf/lastIndexOf и includes аналоги строковым методам
/*
1.  arr.indexOf(item, from) - ищет item, начиная с индекса from, и 
    возвращает индекс, на котором был найден искомый элемент, 
    в противном случае - 1.
2.  arr.lastIndexOf(item, from) - то же самое, но ищет справа налево.
3.  arr.includes(item, from) - ищет item, начиная с индекса from, 
    и возвращает true, если поиск успешен.
*/

let arr = ['Aleks', 'Ivan', 'Olya',];

// indexOf
console.log(arr.indexOf('Ivan'));
console.log(arr.indexOf('Aleks'));
console.log(arr.indexOf('Ivan', 2));

// includes
console.log(arr.includes('Ivan'));
console.log(arr.includes('Aleks'));
console.log(arr.includes('Ivan', 2));