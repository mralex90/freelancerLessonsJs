
// DOM

// Поиск произвольного элемента

// elem.querySelectorAll(CSS);
/*
Самый универсальный метод поиска, он возвращает все элементы внутри "elem",
удовлетворяющие данному CSS-селектору.
Этот метод действительно мощный, потому что можно использовать любой CSS-селектор.

Он ищет и возвращает абсолютно все элементы внутри некого обьекта, который удовлетворяет 
указанному CSS-селектору.
*/

// querySelectorAll - статичная коллекция

// Получение конкретного элемента коллекции (указав его клуч внутри квадратных скобок)
const elems = document.querySelectorAll('li');
console.log([2]);

/*
Соответственно, если это у нас коллекция - то мы можем ее перебрать. Опять же с помощью 
конструкции for..of.
Пишем конструкцию, обьявляем константу (item), of ,и нашу коллекцию.
Это будет цикл который пробежится по всем записям в коллекции, в данном случае выведет их в консоль.
Несмотря на то, что это не массив, мы можем использовать метод перебора forEach. 
*/
/*
for (const item of elems) {
    console.log(item);
}
*/
/*
elems.forEach(item => {
    console.log(item);
});
*/


/////////// Искать можно не только в обьекте document

const subList = document.querySelectorAll('.lesson__sub-list');
const subItems = subList[0].querySelectorAll('li');
console.log(subItems);/*

Например, в константе subList мы получаем коллекцию обьектов у которых есть класс lesson__sub-list'.
Далее обьявляем константу subItems и хотим искать теги "li" только внутри этого обьекта, а именно "sub-list".
Для этого пишем "subList, в [0] (чтобы взять первый обьект), и уже внутри него ищем все теги .querySelectorAll('li')".
В итоге мы получаем только те ЛИ, которые находятся внутри обьекта "lesson__sub-list".  
*/

////////// Неожиданный результат поиска
const subList = document.querySelectorAll('.lesson__sub-list');
const listItems = sublist[0].querySelectorAll('.lesson__list . lesson__item-sub-list');
console.log(listItems);

/*
В данном примере,
когда мы выбрали ".lesson__list .lesson__item-sub-list" в контексте <ul> с классом "lesson__sub-list", элемент 
с классом ".lesson__item-sub-list" был все равно найден, хотя .lesson__list не является потомком элемента в котором 
происходил поиск (".lesson__sub-list").

По умолчанию, querySelectorAll() проверяет только последний элемент без учета контекста.
*/