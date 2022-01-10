
// DOM
// Изменение документа

// Mетоды вставки
// Дополнительно существуют insertAdjacentText и insertAdjacentElement

// Получаем обьект
const textElement = document.querySelector('.lesson__text');

// Вставляем текст
textElement.insertAdjacentText( // есть 2 параметра
    'beforeend',  // 1й параметр отвечает куда именно будет вставлен 2й параметр
    `<p>Learn JS <span class="yellow">React</span>!</p>`// 2й параметр и есть наша строка, внутрь которой можем писать разные теги/строки и тд
)
// Создание нового элемента (тега)
const newElement = document.createElement('div');
// Наполняем новый элемент
newElement.innerHTML = `Learn JS <span class="yellow">React</span>!`;

// Вставляем элемент
textElement.insertAdjacentText(
    'beforeend',
    newElement
)

/*
На практике часто используется только "insertAdjacentHTML".
Потому что для элементов и текста у нас есть методы 
append/prepend/before/after - их быстрее написать, и они 
могут вставлять как узлы, так и текст.
*/
