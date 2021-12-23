
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

// Поиск по селектору класса
const elemOne = document.querySelectorAll('.lesson__list');
console.log(elemOne);/*

Обьявляем переменную, либо константу и присваиваем ей следующее:
document.querySelectorAll, далее пишем () и внутри кавычек пишем имя класса обьектов которые хотим получить.
При поиске по селектору класса перед именем класса обязательно должны указать точку.
В итоге получаем коллекцию выведя эту константу в консоль мы получаем коллекцию, где у нас будет спиок 
всех найденых обьектов.  */

// Поиск по селектору тега
const elemTwo = document.querySelectorAll('li');
console.log(elemTwo);/*

Абсолютно то же самое, только вместо имен
и класса мы пишем тег. Теперь константа получит коллекцию всех 
обьектов у которых  указанный тег. Будут указаны все указанные тег находящиеся на этой странице.  */

// Поиск по смешанному селектору тега и класса
const elemThree = document.querySelectorAll('li.lesson__item-list');
console.log(elemThree);/*

Ровно также мы это делали в CSS, мы можем искать по следующему селектору - записать тег, поставить точку 
и указать класс. Соответственно поиск будет по указанным тегам с указанным классом.  */

// Поиск по тегу первого уровня вложенности
const elemFour = document.querySelectorAll('.lesson__list>li');
console.log(elemFour);/*

Точно так же как уже делали в CSS мы можем искать первый уровень вложенности испльзуя знак ">".
Соответственно, будут найдены только те элементы, которые являются дочерними элементами внутри указанного обьекта.  */

// Поиск по нескольким классам 
const elemFive = document.querySelectorAll('.lesson__list, .lesson__text');
console.log(elemFive);/*
 Перечисляем классы которые нужно найти и все эти обьекты будут собраны в коллекцию и в константу.
*/

// Поиск по вложеным классам
const elemSix = document.querySelectorAll('.leeson__list .lesson__text');
console.log(elemSix);/*
Можем искать всеобьекты с указаным классом, но только те, которые находятся внутри обьекта с указанным классом. 
*/

// Поиск по ID
const elemSeven = document.querySelectorAll('#listItem');
console.log(elebSeven);/*
АЙДИ - уникальный атрибут который может присваиваться тому или иному тегу, но имя атрибута должно быть уникальным.
В любом случае здесь получим только один обьект если он есть на странице, но записывать такой селектор нужно через решетку.
*/

// Поиск по атрибуту
const elen8 = document.querySelectorAll('[data-item');
console.log(elen8);
/*
Абосютно может быть произвольный атрибут,мы можем искать по атрибутау. В эту константу попадут только те обьекты, которые имеют этот атрибут.
*/

//Поиск по атрибуту со значением
const elem9 = document.querySelectorAll('[data-item="85');
console.log(elem9);
/*
Можем искать по атрибуту со значением, запись будет следующая
*/

// Поиск элемента коллекции
ыроопаsbs
gfn