// Динамическая типизация
/*
JavaScript является динамически типизированым. То есть тип данных 
переменной меняется динамически в момент присвоения либо смены ее 
значения. А не в момент обьявления.
*/

let userName;// Обьявляем переменную

console.log(typeof userName);

userName = "Alex"; // Строка (String)

console.log(typeof userName);

userName = 58; // Число (Number)

console.log(typeof userName);