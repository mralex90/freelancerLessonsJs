// Object

let userInfo = {
    name: 'Oleks',
    age: 30
}
console.log(userInfo);
console.log(typeof userInfo);


// Symbol
// Это уникальный идентификаатор обьекта. Создаются новые символы с помощью одноименной ф-ии.
 let id = Symbol("id");
 console.log(typeof id);

 // Function
/*
По сути - тот же обьект для удобства выведенный в отдельный тип для более простого определения  
*/
 let funcVariable = function name(params) {
     //код ф-ии
     console.log(typeof functionVariable);
 }