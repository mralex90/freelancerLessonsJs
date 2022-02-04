
// Основы событий мыши

const button = document.querySelector('.button');

button.addEventListener("mousedown", function (event) {
    console.log(`Нажата кнопка ${event.which}`);
});

button.addEventListener("click", function (event) {
    console.log('Нажата основная кнопка мыши');
});

button.addEventListener("contextmenu", function (event) {
    console.log('Вызвано контекстное меню (не основная кнопка мыши)');
});
/*
event.which = 1 - Нажата основная кнопка мыши (обычно левая)
event.which = 2 - Нажата средняя кнопка мыши (колесо)
event.which = 3 - Нажата не основная кнопка мыши (обычно правая)
*/
/*
Пример:
У нас есть наша кнопка, присволи ее в константу и на нее навесили сразу 3 события.
Так же отметим, что здесь фигурирует еще одна деталь события - "which", которое 
возвращает номер 1, 2 или 3 в зависимости от того, какая кнопка нажата - такое 
значение "which" и вернет.

Таким образом, в зависимости от конкретной задачи, мы можем отлавливать конкретную 
нажатую клавишу мыши при конкретном событиии.
*/