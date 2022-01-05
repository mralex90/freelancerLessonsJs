
// DOM
// Изменение документа

// Просто текст элемента textContent

// Получаем обьект
const textElement = document.querySelector('.lesson__text');
const textElementContent = textElement.textContent;
console.log(textElementContent);

// Полезная возможность textContent - записывать текст "безопасным способом".
// С помощью textContent можем получить только текст.
/*
textElement.textContent = `<p>${textElementContent}</p> <p>And 
    <span class="yellow">React</span> and Typescript</p>`;

console.log(textElement.textContent);
*/
/*
Мы не хотим, чтобы на сайте появлялся произвольный ХТМЛ-код.
Присваивание через textContent - один из способов от этого 
защититься.
*/