// BigInt
/*
B JavaScript тип данных "number" не может содержать числа больше
чем 9007199254740991, или меньше, чем -9007199254740991.
*/

// BigInt
// const bigInteger = 123456789012345678901234567890n;
// console.log(typeof bigInteger);


// String
let userName = "Aleksandr";
console.log(typeof userName);

let userNameV2 = 'Aleksandr';
console.log(typeof userNameV2);
let userNameV3 = `Aleksandr`;
console.log(typeof userNameV3);
 /* двойные и одинарные кавычки являются простыми и в ДЖС
 между ними нет никакой разницы. А вот обратные кавычки 
 позволяют нам использовать дополнительный функционал и встраивать 
 в строку некие выражения с помощью конструкции ${}   */

 let userAge = 30;
 let userAgeInfo = `Возраст: ${userAge}`;
 console.log(userAgeInfo);