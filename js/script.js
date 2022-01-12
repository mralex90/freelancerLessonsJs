
// DOM

// Стили и классы

// Управление стилями

// element.style

// Получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// Задаем стиль с помошью CSS свойства
element.style.color = "red";
/*
Свойство "style" - фактически открывает доступ к ХТМЛ атрибуту "style".
Пример:
Получаем элемент и с помощью специального свойства style, а также с помощью 
того или иного css-свойства мы можем нашему обьекту добавить немного цвета.
Что произошло - обратились к обьекту, написали ему свойство style, далее написали 
css-свойство "color" и присвоили значение "red".
*/


// Для свойства из нескольких слов используется "camelCase":
// margin-bottom
element.style.marginBottom = "30px";
// z-index
element.style.zIndex = "10";
// и т.д.

// Каждое слово пишется отдельно


// Получение значения свойства
// Только если оно записано в атрибуте style
console.log(element.style.marginBottom);
/*
Для того, чтобы получить значение того или иного свойства мы можем просто к нему обратиться.
Сперва пишем сам обьект, потом свойство "style" и нужное нам css-свойство.
В итоге мы в консоле можем вывести его значение, но получить значение свойства мы можем только в том случае, 
если оно записано у нас в атрибуте "style".
*/