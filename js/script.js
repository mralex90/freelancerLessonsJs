
// DOM

// Стили и классы

// Вычисленные стили. getComputedStyle(element, [pseudo])

// Подучаем элемент
const element = document.querySelector('.lesson__item-list_red');

//Получение значения свойства
// Только оно записано в атрибуте "style"
console.log(element.style.fontSize);

// Стиль элемента
// const elementStyle = getComputedStyle(element);
// console.log(elementStyle.fontSize);

/*
Мы можем получать значение того или иного css-свойства с помощью свойства style 
и обращаясь к конкретному css-свойству, но работает это только в том случае если 
это свойство записано в атрибуте "style" в ХТМЛ.
Разберем ситуацию, когда у нас ничего не записано в атрибуте style, а мы пытаемся 
получить css-свойство, например fontSize.
В иотге мы получим пустую строку. Так вот, getComputedStyle - возвращает вычисленные 
стили.
Сначала обьявляем константу куда получаем getComputedStyle и в () указываем наш обьект.
Далее выводим в консоль следующее: 
обращаемся к этой константе и пишем нужное нам css-свойство. При таком подходе мы 
получаем его значение.
*/


// Стиль элемента
const elementStyle = getComputedStyle(element);
console.log(elementStyle.fontSize);

// Стиль псевдоЭлемента
const elementBeforeStyle = getComputedStyle(element, "::before");
console.log(elementBeforeStyle.backgroundColor);

/*
С помощью getComputedStyle мы можем получить стили псевдоэлемента!

После указания элемента мы ставим запятую и пишем, что хотим получить 
стили его псевдоэлемента "::before", например "backgroundColor" - цвет фона.
*/


/// Чтобы получить конкретное значение свойства
// Следует писать его точное (полное) название

// Получаем точное значение
console.log(elementStyle.paddingLeft);
// Получаем не предсказуемуую запись
console.log(elementStyle.padding); // B FF <empty string>


/// Только для чтения
elementStyle.scrollPaddingLeft = "50px";
/*
Работа со значениями css-свойств с помощью getComputedStyle работает только для чтения, 
т.е. таким образом мы не можем переназначить то или иное свойство.
*/