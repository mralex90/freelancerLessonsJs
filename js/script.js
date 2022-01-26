
// Координаты относительно окна браузера
// getBoundingClientRect

// Получаем обьект
const item = document.querySelector('.lesson__item');

// Получаем координаты относительно окна браузера
const getItemCoords = item.getBoundingClientRect();

console.log(getItemCoords);

// Получаем конкретную координату относительно окна браузера
const getItemLeftCoord = item.getBoundingClientRect().left;

console.log(getItemLeftCoord);

/*
Поскольку полученное значение выводится в виде обьекта, то мы может получить 
в константу некую конкретную координату, например, позицию слева - "left".
Для этого мы создаем константу и присваиваем то же самое, только после getBoundingClientRect() 
пишем имя той координаты, которую хотим получить.
Выводим в консоль и получаем уже вместо обьекта конкретное числовое значение нужной нам коордиаты.
*/