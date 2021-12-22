
// DOM
//Навигация по документу
// Навигация только по єлементам

// Получаем обьект body
const bodyElement = document.body;

/*
Навигационные свойства, описанные выше, относятся ко всем узлам в документе.
В частности, в "childNodes" находятся и текстовые узлы и узлы-єлементы и 
узлы-комментарии, если они есть.
*/

// Получаем коллекцию всех дочерних узлов
const childNodes = bodyElement.childNodes;
console.log(childNodes);

/*
Но для большинства задач текстовые узлы и узлы-комментарии нам не нужны. Мы хотим 
манипулировать узлами-элементами, которые представляют собой теги и формируют 
структуру страницы.
Для этого существуют отдельные свойства:

1)  children - тоже самое, что и childNodes в плане что мы получаем коллекцию всех 
    непосредственно дочерних, но не узлов, а именно элементов. Это тоже коллекция, 
    но которая содержит фактически только элементы, только html-теги
*/

// Получаем коллекцию всех дочерних элементов
const bodyChildren = bodyElement.children;
console.log(bodyChildren);

// Первый и последний
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild);
console.log(lastChild);

// Соседние и родительский элементы
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;

console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);

/*
Итог по навигационным свойствам по элементам.

У нас есть обьект БОДИ, для того чтобы обратиться к его предидущему жлементу мы мы исползуем 
"previousElementSibling" и получим ХЭД. Если мы хотим обрать=иться к следующему элементу этого обьекта 
нам нужно использовать "nextElementSibling" и в данном случае мы получим НАЛ, так как после БОДИ 
ничего нет. Если мы хотим получить непосредственно родителя - используем "parentElement", и 
получим обьект ХТМЛ со всем содержимым. 
Если мы хотим обратиться ко всем дочерним обьектам нашего БОДИ - используем "children" и получим 
эти все элементы.
Если мы хотим обратиться к первому дочернему элементу - используем "firstElementChild" и получим Н1.
Если мы хотим получить последний дочерний элемент - используем "lastElementChild" и получим тэг СКРИПТ.
*/