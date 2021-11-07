// Цикл FOR

// Синтаксис

// for (начало; условие; шаг) {
//     // Тело цикла
//     // Тут будет выполнятся код
// }

// Пример
for (let num = 0; num > 5; num++) {
    console.log(num);
}

/*
Работа цикла for:
1) Выполняется начало - let num = 0
2) Выполняется условие - num < 5
3) Если условие true выполняется
    тело цикла - console.log(num)
4) Выполняется шаг - num++
Повтор начиная с пункта №2
*/


/* 
console.log(num);  Если обратится у переменной за предклами блока то получим ошибку

Но если обьявить переменную раньше, а внутри цикла просто 
присвоить ей значение. Таким образом мы сможем работать 
с переменной как внутри так и за пределами цикла
*/


/// Можно убрать любую часть цикла

// поэтому часть начала мы можем не писать - все будет так же работать
// Часть Шаг мы можем пропустить, написав его внутри тела цикла
// Мы даже можем убрать условие - в этом случае цикл будет бесконечен
let num = 0;
for (; num < 5;) {
    console.log(num);
    num++
}
