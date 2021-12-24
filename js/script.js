
// DOM

// Поиск произвольного элемента

// document.getElenentById(ID) & elem.getElementsBy*

// На данный момент, они используются редко, т.к. querySelectorAll может их заменить. Но отличия все же есть!

// getElementsBy*
// ВНИМАНИЕ - getElementsBy.. getElementBy..

/*
elem.getElementByTagName(tag) ищет элементы по имени с данным тегом и возвращает их живую коллекцию. Передав "*" вместо тега, 
можно получить всех потомков.
Поиск может вестись как в обьекте document, так и в любом другом обьекте, и здесь все похоже на предидущие примеры.

Обьевляем переменную константу и присваиваем ей "document.getElementsByTagName", (), в кавычках пишем имя тега.
В итоге получаем живую коллекцию всех найденых обьектов
*/
const elems = document.getElementsByTagName('li');
console.log(elems);

////////////// 
/*
elem.getElementsByClassName(className)
Возвращает элементы, которые имеют данный CSS-класс.
Это абсолютно то же самое, что предидущий пример, только поиск ведется по имени класса.
Синтаксис точно такой же, только пишем "getElementsByClassName" и указываем имя класса.
Здесь уж точку писать не нужно
*/
const elems2 = document.getElementsByClassName('lesson__item-list');
console.log(elems2);


//////////////
/*
document.getElementByName(name)
возвращает элементы с заданным атрибутом . Очень редко используется. Поиск только внутори document. 
Если у нас на странице есть обьект с атрибутом "name", у него есть какое-то значение, и вот по этому значению 
мы можем искать с помощью этого метода указав его внутри кавычек внутри круглых скобок для этого метода.
В итоге получим живую коллекцию таких обьектов.

*/
const elems3 = document.getElementsByName('list');
console.log(elems3);
