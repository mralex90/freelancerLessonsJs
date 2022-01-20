
// Метрики элементов на странице 

// Получаем обьект
const block = document.querySelector('.lesson__block');

// Позиция обьекта
// Свойства offsetParent, offsetLeft u offsetTop

// Получаем родительский элемент
// относительно которого позицыонирован наш обьект
const elementOffsetParent = block.offsetParent;

/*
Это будет ближайший предок, который удовлетворяет следующим условиям:

1. Является  CSS-позиционированным
    ( CSS-свойство position равно absolute, relative, fixed или sticky )
2. или теги <td>, <th>, <table>,
3. или <body>
*/
console.log(elementOffsetParent);

/*
Ситуации, в которых offsetParent равно null:
1. Для скрытых элементов
    (с CSS-свойством display: none или когда его нет в документе).
2. Для элемментов <body> и <html>. 
3. Для элементов с position: fixed.
*/