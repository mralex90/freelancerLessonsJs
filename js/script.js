// Оператор присвоения 

let a = 1 + 2;
let b = 2;

let result = 8 - (a = b + 3);
console.log("Результат в скобках: " + a);
console.log("Общий результат: " + result);// так записывать не рекомендуется из-за низкой читаемости кода

// Присваивание по цепочке
/*
let result1 = result2 = result3 = 1 + 2;
console.log(result1);
console.log(result2);
console.log(result3);
*/

// Более понятная запись
let result1 = 1 + 2;

result2 = result1;
result3 = result2;

console.log(result1);
console.log(result2);
console.log(result3);


// Сокразенная запись вычислений с присваиванием
// let users = 5;
// users = users + 3;
// users = users * 2;

// Можно записать так

// let users = 5;
// console.log(users);
// users += 3;
// console.log(users);
// users *= 2;
// console.log(users);

// Так же это работает и с другими операторами

// Приоритет такой записи такой же как и у обычного оператора присвоения
let users = 5;
console.log(users);
users += 1 + 2; // В первую очередь выполнится (1 + 2), а уже потом сложение и присвоение(+=)
console.log(users);
