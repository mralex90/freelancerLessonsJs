// Изменение обьекта 

// Удаление свойства

let userInfo = {
    name: "Aleks",
    age: 30,
    "likes javascript": true   
}
console.log(userInfo);

delete userInfo.age;

console.log(userInfo);

delete userInfo["likes javascript"];

console.log(userInfo);
/*
Унас есть юбьект у него 3 свойства. Выводим его в консоль.
Чтобы какое-то свойство удалить используем "delete".
Обращаемся к обьекту, в данном случае, через точку, к свойству
которое нужно удалить и все. Выводим в консоль и видим что свойство 
удалено, осталось 2 свойства.
Если нужно удалить имя свойтства которое состоит из двух+ слов, то 
привычным "delete", имя переменной, [в кавычкахимя свойства].
*/


/////  Изменение свойства

let userInfo1 = {
    name: "Oleks",
    age: 31,
}
console.log(userInfo1);

userInfo1.age = 18;

console.log(userInfo1);

/*
Чтобы изменить свойтсво:
Обращаемся к переменной к которой присвоен обьект. Вданном случае через точку.
И потом присваиваем новое значение.
*/

// Изменение свойства даже в константе

const userInfo2 = {
    name: "Oleksandr",
    age: 31,
}
console.log(userInfo2);

userInfo1.age = 18;

console.log(userInfo2);



