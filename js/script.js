
// DOM
// Изменение документа

// Содержание элемента целиком outerHTML(содержимое + САМ обьект)

// Получаем обьект
const textElement = document.querySelector('.lesson__text');

// Получаем содержимое обьекта "как есть" вместе с HTML, а также сам элемент
const textElementContent = textElement.outerHTML;
console.log(textElementContent);
// Помимо самого содержимого (innerHTML) мы получаем еще и сам обьект, его оболочку (в д.с. <div class="lesson__text">Text</div>)

/* Есть еще одна особенность. 
Попробуем изменить документ. Т.е. обращаемся к нашему элементу, пишем outerHTML и записываем 
туда абсолютно новый обьект (вместо дива с классом текст пишем просто параграф и некую фразу).
Видим что документ изменился. Если перейдем  во вкладку ELEMENTS, то в этом убедимся.

Но, если мы заново захотим получить outerHTML данного обьекта - мы все еще получим старую оригинальную запись.
*/

textElement.outerHTML = `<p>${textElementContent}</p> <p>And 
    <span class="yellow">React</span> and Typescript</p>`;

// console.log(textElement.outerHTML);