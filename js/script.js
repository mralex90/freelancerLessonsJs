// Округдение чисел 

// В JS встроен обьект Math, котрый содержит несколько ф-ий для работы с округлением:
 
// Math.floor - Округление в меньшую сторону

let numOne = Math.floor(5.8);
let numTwo = Math.floor(2.2);
let numThree = Math.floor(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);

// Math.ceil - Округление в большую сторону

let numOne1 = Math.ceil(5.8);
let numTwo1 = Math.ceil(2.2);
let numThree1 = Math.ceil(-2.2);

console.log(numOne1);
console.log(numTwo1);
console.log(numThree1);

// Math.round - Округление до ближайшего целого 

let numOne2 = Math.round(5.8);
let numTwo2 = Math.round(2.2);
let numThree2 = Math.round(-2.2);

console.log(numOne2);
console.log(numTwo2);
console.log(numThree2);
/*
Math.round округляет до целого числа, а чтобы округлить до 5.8 или 5.85 есть пара способов:
1) Способ умножения и деления
*/
let num1 = Math.round(5.845 * 10) / 10; // 58.45 -> 58 -> 5.8
console.log(num1);

let num2 = Math.round(5.845 * 100) / 100; // 584.5 -> 585 -> 5.85
console.log(num2);

let num3 = Math.round(5.8449 * 100) / 100; // 584.49 -> 584 -> 5.84
console.log(num3);

/*
2) Способ: метод toFixed(n) - округляет число до "n" знаков после запятой 
и возвращает строковое представление результата. 
Берем число, присваиваем его в переменную, далее переменной применяем метод 
"toFixed", в скобках указывая количество знаков после запятой, которые нужно получить.
В результате получаем строку, в которой написано 5.8.

Чтобы преобразовать эту строку в число - можем использовать либо унарный оператор (+), 
либо специальную ф-ию "Number".
В обоих случаях мы получим число 5.8
*/
let num4 = 5.845;
console.log(num4.toFixed(1));
// Преобразить в число
console.log(+num4.toFixed(1));
console.log(Number(num4.toFixed(1)));