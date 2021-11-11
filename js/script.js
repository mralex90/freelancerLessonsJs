// Обьявление функции (Function Declaration)

/// Рекурсия

// function getSumm(numOne, numTwo) {
//     let numSumm = calcSumm(numOne, numTwo);

//     console.log(numSumm);
// }
// function calcSumm(numOne, numTwo) {
//     return numOne + numTwo;
// }
// getSumm(5, 5);

/*
В процессе выполнения той или иной задачи внутри ф--ии могут быть реализованы 
другие ф-ии, для выполнения подзадач.Так же могут быть вызваны некие ф-ии 
из вне.
В случае когда ф-ия вызывает саму себя - называется рекурсией.
*/
// function calcSumm(numOne, numTwo) {
//     let result = 1;
//     // умножаем result на numOne numTwo раз в цикле
//     for (let i = 0; i < numTwo; i++) {
//         result *= numOne;
//     }
//     return result;
// }
// console.log(calcSumm(2, 3));
/*
В этой ф-ии нужно переменную result умножить на параметр numOne, numTwo 
раз. Это делается с помощью цикла и возвращается результат в зависимости 
от переданных параметров.
 
*/
function calcSumm(numOne, numTwo) {
    if (numTwo === 1) {
        return numOne;
    } else {
        return numOne * calcSumm(numOne, numTwo - 1);
    }
}
console.log(calcSumm(2, 3));
/*
Тоже самое можно записать с помощью рекурсии. Здесь ф-ия calcSumm 
в определенный момент вызывает саму себя, передавая немного другие 
параметры. Количество таких вложеных вызовов называется глубиной 
рекурсии и ограничивается движком ДжавСкрипт (примерно до 10000 вложеных вызовов).
Для решения большого количества задач именно рекурсивный метод позволяет 
реализовать более простой код, который легче всего поддерживать.
*/