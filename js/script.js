// ЧИСЛА


// В ДЖС сущестует 2 вида чисел: числа в 64битном формате и bigInt числа

// Число 
let someNum = 458;
console.log(someNum);

// Десятичные числа
let someNums = 4.58;
console.log(someNums);

/*
Записать простые числа в ДЖС можно след образом:
Во первых присвоить число переменной и дальше с ней работать.
Если у нас десятичные числа, то нужно их записывать через точку. 
*/

let someBigNum = 1000000;
console.log(someBigNum);

let someLittleNum = 0.000001;
console.log(someLittleNum);
/*
В ситуации когда нужно работать с числами у которых есть множество нулей, как в примерах, 
и поскольку нулей множество и в них легко запутаться, существует более надежная запись.*/
let someBigNum1 = 1e6; // 1 * 1000000;
console.log(someBigNum1);

let someLittleNum1 = 1e-6; //1 / 100000;
console.log(someLittleNum1);
/*
