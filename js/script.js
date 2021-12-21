
// DOM
//Навигация по документу

// Получаем обьект body
const bodyElement = document.body;

// Соседние и родительские узлы
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);

/*
В примере разберем обращение к предидущему узлу обьекта, к следующему узлу обьекта 
и к родителю. Для этого существуют соответствующие свойства.
Чтобы получить предидущий узел обьекта кот находится на том же уровне вложенности мы
используем previousSiblingNode.
Получая следущий узел - видим другую картину. Для этого используем nextSibling и выведя 
в консоль эту константу получаем null, почему?
Потому что после БОДИ у нас ничего нет и если тем или иным способом попытаемся обратиться 
к несуществующему обьекту мы получим null.
Получить родителя обьекта мы можем с помощью свойства parentNode.
Выведя в консоль parentNode обьект БОДИ мы увидим обьект html со всем содержимым.
*/