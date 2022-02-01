
// Всплытие и погружение
const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');

/*
Всплытие
Когда на элементе происходит событие, обработчики сначала 
срабатываюют на нем, потом на его родителе, затем выше и 
так далее, вверх по цепочке предков.

*/
block.addEventListener("click", function (event) {
    console.log('Клик на Блок!');
    // console.log(event.target);
});
blockInner.addEventListener("click", function (event) {
    console.log('Клик на Блок второго уровня!');
});
blockInnerInner.addEventListener("click", function (event) {
    console.log('Клик на Блок третьего уровня!');
    //Остановка всплытия
    event.stopPropagation();
});

/*
Если вдруг мы хотим остановить всплытие, то мы можем воспользоваться 
методом "stopPropagation".

Останавливать всплытие стоит очень осторожно и только точно понимая, что делаем.
*/