//    ========= CONST ==========

// Обьявление константы
const myAge = 30;
myAge = 21; // нельзя изменить константу

// Имена констант с заранее известными значениями
const BLOCK_SIZE = 25;
const COLOR_RED = "#F00";

// Имя константы сл значением присвоенным в процессе выполнения программы
const dummSizes = 25 + 30;


// Смена значений в константе
// Обьект с данными
const userProfile = {
    name: 'Alex',
    age: 30,
    address: 'Kharkiv' 
}
console.log(userProfile);

// Далее я меняю значение одного из полей обьекта
userProfile.age = 21;
// Ошибки нет, данные изменились
console.log(userProfile);
// Тоже самое сработает для массивов и др обьектных значений


// ========= КЛЮЧЕВОЕ СЛОВО VAR =========

// Использование переменной до ее обьявления

// "use strict"

age = 30;
console.log(age);

var age;

// Области видимости переменной

function testBlockLet() {
    let myAgeLet = 30;
}
// Пременная НЕ видна за пределами блока console.log(myAgeLet);

function testBlockVar() {
    var myAgeVar = 30;
}

testBlockVar();

// Переменная не видна заа пределами блока console.log(myAgeVar);



if (true) {
    let sizeLet = 50;
}

// Пременная НЕ видна за пределами блока console.log(sizeLet);

if (true) {
    var sizeVar = 50;
}

// Переменная ВИДНА за пределами блока console.log(sizeVar);