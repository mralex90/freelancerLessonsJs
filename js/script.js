
// DOM
// Изменение документа

// Клонирование узлов cloneNode

// Если нужен не перенос а именно копия элемента

// Получаем обьект
const textElement = document.querySelector('.lesson__text');
// Клонирование без дочерних элементов
// const cloneTextElement = textElement.cloneNode();

// Глубокое копирование вместе с содержимым
const cloneTextElement = textElement.cloneNode(true);

const lessonBlock = document.querySelector('.lesson');
lessonBlock.append(cloneTextElement);

/*
Если наш клон скопировался без сожержимого, то нужно при клонировании в () написать ТРУ,
то это вызовет глубокое клонирование со все содержимым.
*/

////////// Удаление узлов

// Получаем обьект
const textElement = document.querySelector('.lesson__text');
// Удаляем обьект
textElement.remove();
/*

*/