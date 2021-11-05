// Специальные возможности операторов

// Примечание оператора сложения к строкам
// let resultOne = "Mr" + "Alex" + "Bond" + " " + "90"; 
// console.log(resultOne);
/* 
Если в выражении есть строка, то есть если хотя бы
один операнд будет строкой, то конечный результат 
тоже будет строкой
*/
// let resultTwo = "Alex " + 58;
// console.log(resultTwo); 
// console.log(typeof resultTwo); 

// Порядок значения не имеет 

// Казусы
// let resultFour = 2 + "2";
// console.log(resultFour);
// console.log(typeof resultFour);

//Операции до сложения со строкой выполняются как обычно
// let resultFive = 58 - 20 + " Alex";
// console.log(resultFive);

/*
Сложение и преобразование строк - это особенность бинарного оператора сложения.
Другие арифметические операторы работают только с числами,
соответственно пребразуют все операнды в числа.
*/
 // Примеры
// Работа других операторов
let resultOne = "25" - 5;
console.log(resultOne);
console.log(typeof 
    resultOne);
// или

let resultTwo = 10 * "80";
console.log(resultTwo);
console.log(typeof resultTwo);

// Недопустимая операция
let resultThree = 3 * "Alex";
console.log(resultThree); // Вернет NaN
console.log(typeof resultThree); 
/*
Оператор сложения существует и в унарной форме.
И в этом случае он выполняет роль преобразователя в число
*/
 
// Со строками
let result1 = +'25';
console.log(result1);
console.log(typeof result1);

// С числами
let result2 = +10;
console.log(result2);
console.log(typeof result2);


// Унарный оператор сложения +

// Пример 
let users = "25";
let admins = "10";
console.log(users + admins);

console.log(+users + +admins);

// Более длинная запись
console.log(Number(users) + Number(admins));