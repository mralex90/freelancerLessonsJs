
// Метрики элементов на странице 

// Получаем обьект
const block = document.querySelector('.lesson__block');

// Размеры обьекта без раиок и полосы прокрутки
// clientWidth & clientHeight

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

/*
clientWidth & clientHeight - это тоже размеры обьекта, его ширина и высота, 
но без рамок и без полосы прокрутки.
Рассмотрим на примере: 
Создаем две константы, обращаемся к нашему блоку, получаем clientWidth и 
clientHeight, выводим в консоль.
Видим, что ширина 443рх, высота 260рх. Разберемся из чего же состоит данная ширина.
Общая рамка (offsetWidth) - рамка слева - рамка справа - ширина скролла
 500 - 20 - 20 - 17 = 443 


*/