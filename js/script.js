
// Ширина и высота документа
// включая прокрученную часть

let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);
/*
Но что если нам нужно получить высоту или ширину всего документа включая 
ту часть которую часть которую мы видим при скролле?

Для этого можем использовать такую конструкцию включающую с себя множество 
свойств, о которых речь дальше пойдет. Но из-за разницы в браузерах и возможных 
ошибках чаще всего используют именно такой подход - с помощью математической 
функции Math.max() мы получаем максимальное значение из присудствующих. 
Соответственно, в переменную scrollWidth мы получим актуальную ширину, а 
в переменную scrollHeight - актуальную высоту.
Выведя в консоль - мы получим вот такие два значения (940   2313).
У нас нет горизонтального скролла, по-этому значение такое же как и при clientWidth, 
а вот scrollHeight мы получаем очень большое значение (2313), если мы перейдем в ЭЛЕМЕНТ КОНСОЛИ, 
и померяем наш РАППЕР (это див, в которой заключен весь контент на странице), то мы 
как раз увидим это значение - 2313.
Таким образом мы получаем полную высоту всего контента на странице.

*/