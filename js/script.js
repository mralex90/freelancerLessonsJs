
// Преобразование массивов

// Метод map
/*
вызывает функцию для каждого элемента массива и возвращает новый 
массив с результатами выполнения этой функции.

let result = arr.map(function(item, index, array) {
    возвращается новое значение вместо элемента
});
*/

let arr = ["Alex", "Ivan", "Olya",];

let result = arr.map(function(item, index, array) {
    return item[0];
});
//let result = arr.map(item => item[0]);
console.log(arr);
console.log(result);


/////// Методы split & join

/*
Метод split преобразовывает строку в массив по заданному разделителю
Синтаксис: str.split(delim)
*/

let str = 'Aleks,Ivan,Olya';

let arr1 = str.split(',');
console.log(arr1);

// Можно ограничить количество обьектов которые попадут в массив

let arr2 = str.split(',', 2);
console.log(arr2);

/*
Метод join работает наоборот - преобразовывает массив в строку с заданным
разделителем.
Синтаксис: arr.join(glue) 
*/

let arr3 = ['name1', 'name2', 'name3',];
let str1 = arr3.join(',');
console.log(str1);
// при использовании join мы можем указать разделитель


// Получение строки из массива
let arr31 = ['Name1', 'Name2', 'Name3'];
console.log(String(arr31));
// при простом переводе в строку мы не может указать разделитель и он всегда будет зпт
