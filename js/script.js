// Специальные возможности операторов

// Примечание оператора сложения к строкам
let resultOne = "Mr" + "Alex" + "Bond" + " " + "90"; 
console.log(resultOne);
/* 
Если в выражении есть строка, то есть если хотя бы
один операнд будет строкой, то конечный результат 
тоже будет строкой
*/
let resultTwo = "Alex " + 58;
console.log(resultTwo); 
console.log(typeof resultTwo); 

// Порядок значения не имеет 
let resultThree = 58 + " Alex";
console.log(resultThree);
// Казусы
let resultFor = 2 + "2";
console.log(resultFour);

//Операции до сложения со строкой выполняются как обычно
letresult