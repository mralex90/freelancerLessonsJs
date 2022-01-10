
// DOM
// Изменение документа

// Mетоды вставки
// insertAdjacentHTML/Text/Element

// Получаем обьект
const textElement = document.querySelector('.lesson__text');

// Вставляем текст, HTML, элемент

textElement.insertAdjacentHTML( // есть 2 параметра
    'afterend',  // 1й параметр отвечает куда именно будет вставлен 2й параметр
    `<p>Learn JS <span class="yellow">React</span>!</p>`// 2й параметр и есть наша строка, внутрь которой можем писать разные теги/строки и тд
);

/*
"beforebegin" - вставить html непосредственно перед textElement
"afterbegin" - вставить html в начало textElement
"beforeend" - вставитть html в конец textElement
"afterend" - вставить html непосредственно после textElement
*/