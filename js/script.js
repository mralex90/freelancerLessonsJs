// Null
/*
Null, также как и Undefined, содержит одно значение Null
*/

// Пример
// let userName = null;
// console.log(userName);
// однако в JS, Null не является ссылкой на несуществующий обьект либо нулевым указателем,
// это специальное значение кот представляет собой ничего
// Null не равно Undefined

// Пример 
// Попытка обратиться к обьекту которого нет 
let block = document.querySelector('.block');

// получаем Null
console.log(block);

//Вернем тип object
console.log(typeof block);