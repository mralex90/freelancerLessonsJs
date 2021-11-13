// Планирование setTimeout & setInterval

// function showNumber(num) {
//     console.log(num);
//     if(num < 5) {
//         setTimeout(showNumber, 1000, ++num);
//     }
// }
// setTimeout(showNumber, 1000, 1);
/*
Еще один пример, где с задержкой в 1 сек мы будем в консоль выводить 
число при этом увеличивая егго на 1.
Если мы хотим остановиться на числе 5, и дальше ф-ию не выполнять, то 
нам достаточно здесь указать условие где переменная "num" должна быть 
меньше 5.
Вот таким образом и теперь ф-ия будет выполнятся только до 5
*/


// Отмена действия

function showNumber(num) {
    console.log(num);
    let timeId = setTimeout(showNumber, 1000, ++num);
    if (num === 6) {
        clearTimeout(timeId);
    }
}
setTimeout(showNumber, 1000, 1);
/*
       CLEARTIMOUT
clearTimeot - останавливает работу setTimeout обьявленого ранее.
И для того чтобы это сработало нужно присвоить setTimeout к какой-то 
переменной и, при определенном условии, мы пишет clearTimeot и указываем  
в круглымх скобках эту самую переменную, таким образом мы останавливаем 
действие. 
*/