// Другие возможности

/*
Уже знакомый нам обьект Math, содержит различные математические 
функции и константы. Вот некотрые из них:

Math.random()
Возвращает псевдо случайное число в диапазоне от 0(включительно) 
до 1(но не включая 1)
*/

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());


// Math.max(a,b,c...) / Math.min(a,b,c...) 
// Возвращает наибольшее/наименьшее число из перечисленных аргументов

console.log(Math.max(5, 85, -49));
console.log(Math.min(5, 85, -49));

// Math.abs()
// Возвращает абсолютное значение (модуль) числа.

let num = -58;
console.log(Math.abs(num));

//Math.pow(n,power) 
// Возвращает число "n", возведенное в степень "power".

console.log(Math.pow(5,8));
