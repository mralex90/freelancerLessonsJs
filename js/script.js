
// DOM
// Изменение документа

// Mетоды вставки

// Получаем обьект
const textElement = document.querySelector('.lesson__text');

// Создание нового элемента (тега)
const newElement = document.createElement('div');

// Наполняем новый элемент
newElement.innerHTML = `Learn JS <span class="yellow">React</span>!`;

// Вставляем новый элемент... 

// ...перед обьектом
// textElement.before(newElement);
// ...после обьекта
textElement.after(newElement);
// ...внутрь и в начало обьекта
// textElement.prepend(newElement);
// ...внутрь и в конец обьекта
//textElement.append(newElement);
/*
Синтаксис записи прост - обращаемся к обьекту с которым хотим взаимодействовать, пишем 
тот или иной метод, в зависимости от того куда мы хотим вставить элемент и в круглых скобках 
мы пишем наш элемент.

Вот более наглядная схема:
*/
// lesson__list - 

// before
<ul class="lesson__list">
   //prepend    
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
   // append
</ul>
// after